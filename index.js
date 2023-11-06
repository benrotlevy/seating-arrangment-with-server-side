const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");
const usersRouter = require("./routes/users.routes.js");

dotenv.config();

const uri = process.env.MONGOOSE_URI;

// mongoose.set("strictQuery", true);

mongoose.connect(uri, (error, mongoConnectionInstance) => {
    if (error) throw new Error("Mongoose Connection failed, Error: " + error);
    if (!process.env.NODE_ENV) {
        const { host, port, name } = mongoConnectionInstance;
        // console.log(mongoConnectionInstance);
        console.log({ host, port, name });
    }
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);

const publicDirectoryPath = path.join(__dirname, "client/build");
app.use(express.static(publicDirectoryPath));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log("SERVER IS UP AND RUNNING ON PORT " + PORT);
});
