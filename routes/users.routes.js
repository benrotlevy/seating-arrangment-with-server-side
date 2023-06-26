const { Router } = require("express");
const User = require("../db/models/users.js");
const auth = require("../db/middleware/auth.js");
const { async } = require("rxjs");

const users = Router();

users.post("/", async (req, res) => {
    //   console.log(req.body);
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

users.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateToken();
        res.status(200).send({ user, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

users.post("/logout", auth, async (req, res) => {
    //   console.log(req.headers);
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send(e.message);
    }
});

users.post("/logoutAll", auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

users.patch("/me", auth, async (req, res) => {
    try {
        const user = req.user;
        if (req.body.tables) user.tables = req.body.tables;
        if (req.body.guests) user.guests = req.body.guests;
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = users;
