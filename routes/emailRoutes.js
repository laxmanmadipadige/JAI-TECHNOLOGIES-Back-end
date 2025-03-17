const express = require("express");
const { sendEmail } = require("../controllers/emailController");

const router = express.Router();

// ✅ Correct Route: API for Sending Emails
router.post("/api/send-email", sendEmail);

module.exports = router;
