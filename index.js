require("./db/mongoose.js");
const express = require("express");
const cors = require("cors");
const path = require("path");
const usersRouter = require("./routes/users.routes.js");

const app = express();

const PORT = process.env.PORT || 5000;

const publicDirectoryPath = path.join(__dirname, "client/build");
app.use(express.static(publicDirectoryPath));

app.get("/*", (req, res) => {
    res.sendFile(publicDirectoryPath);
});

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
    console.log("SERVER IS UP AND RUNNING ON PORT " + PORT);
});
