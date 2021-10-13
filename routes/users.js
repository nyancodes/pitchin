const express = require("express");
const router = new express.Router();

router.post("/register", async function (req, res, next) {
  console.log(req.body);
});

router.post("/login", async function (req, res, next) {
  console.log(req.body);
});

module.exports = router;
