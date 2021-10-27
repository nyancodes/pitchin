const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const { createToken } = require("../helpers/tokens");

router.post("/register", async function (req, res, next) {
  const { username, password, firstName, lastName, email } = req.body;

  try {
    if (username && password && firstName && lastName && email) {
      const user = await User.register(req.body);
      return res.status(201).json({ user });
    }
  } catch (err) {
    return next(err);
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
