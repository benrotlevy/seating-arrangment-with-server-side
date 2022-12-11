const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGOOSE_URI;

mongoose.connect(uri, (error, mongoConnectionInstance) => {
    if (error) throw new Error("Mongoose Connection failed, Error: " + error);
    if (!process.env.NODE_ENV) {
        const { host, port, name } = mongoConnectionInstance;
        // console.log(mongoConnectionInstance);
        console.log({ host, port, name });
    }
});
