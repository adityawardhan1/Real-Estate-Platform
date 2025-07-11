const express = require('express');
const axios = require('axios');
const router = express.Router();
const realProperties = require('../data/properties');

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  console.log("💬 Incoming message:", message);
  console.log("🔑 Using OpenRouter Key:", process.env.OPENROUTER_API_KEY?.slice(0, 12) + '...');

  const lowerMsg = message.toLowerCase();

  // More intelligent property matching
  const matchedProps = realProperties.filter(p => {
    const titleWords = p.title.toLowerCase().split(' ');
    const locationWords = p.location.toLowerCase().split(' ');
    
    return titleWords.some(word => lowerMsg.includes(word)) ||
           locationWords.some(word => lowerMsg.includes(word)) ||
           lowerMsg.includes(p.location.toLowerCase()) ||
           lowerMsg.includes(p.title.toLowerCase());
  }).slice(0, 3);

  // Build minimal context based on question type
  let propertyContext = '';
  
  // Detect question type for more targeted responses
  const isROIQuestion = lowerMsg.includes('roi') || lowerMsg.includes('return');
  const isPriceQuestion = lowerMsg.includes('price') || lowerMsg.includes('cost');
  const isStatusQuestion = lowerMsg.includes('status') || lowerMsg.includes('completion');
  const isComparisonQuestion = lowerMsg.includes('compare') || lowerMsg.includes('vs') || lowerMsg.includes('better');

  if (matchedProps.length > 0) {
    propertyContext = 'Relevant properties:\n';
    matchedProps.forEach((p, idx) => {
      let propInfo = (idx + 1) + '. ' + p.title + ' - ' + p.location + '\n';
      
      // Only include relevant data based on question type
      if (isROIQuestion) {
        propInfo += '   Returns: ' + p.returns + '\n';
      } else if (isPriceQuestion) {
        propInfo += '   Price: ' + p.price + '\n';
      } else if (isStatusQuestion) {
        propInfo += '   Status: ' + p.status + '\n   Completion: ' + p.completionDate + '\n';
      } else {
        // For general questions, include basic info
        propInfo += '   Price: ' + p.price + '\n   Status: ' + p.status + '\n   Returns: ' + p.returns + '\n';
      }
      
      if (p.probabilityOfCompletion) {
        propInfo += '   Completion Probability: ' + p.probabilityOfCompletion + '\n';
      }
      
      propertyContext += propInfo + '\n';
    });
  } else {
    // If no specific match, provide limited general data
    propertyContext = 'Available properties (showing top 3):\n';
    realProperties.slice(0, 3).forEach((p, idx) => {
      propertyContext += (idx + 1) + '. ' + p.title + ' - ' + p.location + ' - ' + p.price + '\n';
    });
  }

  // More specific prompt based on question type
  let specificInstruction = '';
  if (isROIQuestion) {
    specificInstruction = 'Answer ONLY about ROI/returns. Do not mention other properties unless directly asked for comparison.';
  } else if (isPriceQuestion) {
    specificInstruction = 'Answer ONLY about pricing. Do not provide additional property details.';
  } else if (isStatusQuestion) {
    specificInstruction = 'Answer ONLY about completion status and timeline.';
  } else {
    specificInstruction = 'Answer ONLY the specific question asked. Do not provide extra information.';
  }

  const finalPrompt = specificInstruction + '\n\nProperty Data:\n' + propertyContext + '\n\nUser Question: ' + message + '\n\nGive a direct, one-sentence answer. Do not add extra context or analyze other properties unless specifically asked.';

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mistral-small-3.2-24b-instruct:free',
        messages: [
          {
            role: 'system',
            content: 'You are a precise real estate assistant. Answer ONLY what is asked. Keep responses to one sentence unless comparison is requested. Never volunteer additional information.'
          },
          { role: 'user', content: finalPrompt }
        ],
        temperature: 0.3,
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': 'Bearer ' + process.env.OPENROUTER_API_KEY,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'Real Estate Chatbot'
        }
      }
    );

    console.log("🤖 Raw model response:", JSON.stringify(response.data, null, 2));

    const reply = response.data.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      console.error("⚠️ Empty reply from model");
      return res.status(500).json({
        error: 'Empty reply from the model',
        fallback: 'Sorry, I could not find a valid answer. Try again later.'
      });
    }

    res.json({ reply });

  } catch (error) {
    console.error("❌ API error:", error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to get response from the model',
      fallback: 'Sorry, I am facing some technical issues at the moment. Please try again shortly.'
    });
  }
});

module.exports = router;