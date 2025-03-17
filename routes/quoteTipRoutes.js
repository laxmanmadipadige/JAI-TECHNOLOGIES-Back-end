const express = require("express");
const { fetchAIQuote, fetchAITip } = require("../controllers/quoteTipController");

const router = express.Router();

// API Route for AI-generated Quote
router.post("/api/generate-quote", fetchAIQuote);

// API Route for AI-generated Tip
router.post("/api/generate-tip", fetchAITip);

module.exports = router;
