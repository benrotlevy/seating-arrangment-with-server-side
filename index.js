require("./db/mongoose.js");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

const publicDirectoryPath = path.join(__dirname, "client/build");
app.use(express.static(publicDirectoryPath));

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("SERVER IS UP AND RUNNING ON PORT " + PORT);
});
