const axios = require("axios");

const fetchAIQuote = async (req, res) => {
    const { keywords } = req.body;
    const API_KEY = process.env.OPENAI_API_KEY; // Store API key in .env

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: `Generate a unique quote about: ${keywords}` },
                ],
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

        const quote = response.data.choices?.[0]?.message?.content.trim() || "No quote generated.";
        res.json({ quote });
    } catch (error) {
        console.error("❌ Error fetching AI Quote:", error);
        res.status(500).json({ error: "Failed to generate quote. Please try again." });
    }
};

const fetchAITip = async (req, res) => {
    const { keywords } = req.body;
    const API_KEY = process.env.OPENAI_API_KEY; // Store API key in .env

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: `Generate an inspirational tip about: ${keywords}` },
                ],
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

        const tip = response.data.choices?.[0]?.message?.content.trim() || "No tip generated.";
        res.json({ tip });
    } catch (error) {
        console.error("❌ Error fetching AI Tip:", error);
        res.status(500).json({ error: "Failed to generate tip. Please try again." });
    }
};

module.exports = { fetchAIQuote, fetchAITip };
