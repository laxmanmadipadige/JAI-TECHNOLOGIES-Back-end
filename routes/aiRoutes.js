const express = require("express");
const { fetchAITip } = require("../controllers/aiController"); // ✅ Correct Import

const router = express.Router();

// ✅ Define API route for AI-generated tips
router.post("/api/generate-tip", fetchAITip);

module.exports = router;
