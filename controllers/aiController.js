const axios = require("axios");

const fetchAITip = async (req, res) => {
  const { prompt } = req.body;
  const API_KEY = process.env.OPENAI_API_KEY;
  const API_URL = "https://api.openai.com/v1/chat/completions";

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 50,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.json({ tip: response.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error);
    res.status(500).json({ error: error.response?.data?.error?.message || "Unknown error" });
  }
};

module.exports = { fetchAITip }; // ✅ Correctly exporting the function
