const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  console.log("💬 Incoming message:", message);
  console.log("🔑 Using OpenRouter Key:", process.env.OPENROUTER_API_KEY?.slice(0, 12) + '...');

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-small-3.2-24b-instruct:free',
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful Indian real estate assistant. Answer queries about property buying, selling, stamp duty, RERA, home loans, and legalities.'
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'Real Estate Chatbot'
        }
      }
    );

    const reply = response.data.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      console.error("⚠️ Empty reply from model");
      return res.status(500).json({ error: 'Empty reply from the model' });
    }

    res.json({ reply });

  } catch (error) {
    console.error("❌ API error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from the model' });
  }
});

module.exports = router;
