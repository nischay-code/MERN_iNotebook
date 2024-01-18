const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let obj = { a: "This", number: 13 };
  res.json(obj);
});

module.exports = router;
