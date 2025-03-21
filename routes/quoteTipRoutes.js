const express = require("express");
const { fetchAIQuote, fetchAITip } = require("../controllers/quoteTipController");

const router = express.Router();

// API Route for AI-generated Quote
router.post("/generate-quote", fetchAIQuote);

// API Route for AI-generated Tip
router.post("/generate-tip", fetchAITip);

module.exports = router;
