const express = require("express");
const sendMail = require("../controllers/mailController");

const router = express.Router();

router.post("/mail", sendMail);

module.exports = router;
