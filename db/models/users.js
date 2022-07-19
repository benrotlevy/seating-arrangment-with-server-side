const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const guestSchema = mongoose.Schema({
    firstName: {
        type: String,
        default: "",
    },
    lastName: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        default: "",
    },
    table: {
        type: String,
        default: "",
    },
});

const tablesSchema = mongoose.Schema({
    number: {
        type: Number,
        require: true,
    },
    type: {
        type: Number,
        require: true,
    },
    location: {
        type: [Number],
        require: true,
    },
    guests: [String],
});

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minLength: 5,
    },
    tokens: [
        {
            token: {
                type: String,
                require: true,
            },
        },
    ],
    guests: [guestSchema],
    tables: [tablesSchema],
});

userSchema.methods.generateToken = async function () {
    const token = jwt.sign({ id: this._id.toString() }, "secret string");
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    let error = false;
    if (!user) error = true;
    const match = await bcrypt.compare(password, user.password);
    if (!match) error = true;
    if (error) throw new Error("failed to login");

    return user;
};

userSchema.methods.toJSON = function () {
    const public = this.toObject();
    delete public.password;
    delete public.tokens;
    return public;
};

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
