const jwt = require("jsonwebtoken");
const User = require("../models/users.js");

const auth = async (req, res, next) => {
  try {
    //   console.log(req.header("Authorization"));
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secret string");
    const user = await User.findOne({
      _id: decoded.id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
