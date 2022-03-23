const express = require("express");
const router = new express.Router();
const db = require("../db");

router.get("/all", async function (req, res) {
  let clientResult = await db.query("SELECT * FROM users;");
  return res.json(clientResult.rows);
});

module.exports = router;
