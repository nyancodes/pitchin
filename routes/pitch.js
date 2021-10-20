const express = require("express");
const router = new express.Router();

router.get("/pitches", function (req, res) {
  return res.json({ messsage: "Yay our API works" });
});

module.exports = router;
