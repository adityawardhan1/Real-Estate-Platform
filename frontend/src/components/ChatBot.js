import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Bot, User, Minimize2 } from 'lucide-react';
import './ChatBot.css';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your Real Estate Assistant. I can help you with property information, pricing, ROI details, and completion status. How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = {
        role: 'assistant',
        content: data.reply || data.fallback,
        timestamp: new Date(),
      };

      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 800);
    } catch (err) {
      console.error('Error:', err);
      const errorMsg = {
        role: 'assistant',
        content: '⚠️ Unable to connect to server. Please try again.',
        timestamp: new Date(),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, errorMsg]);
        setIsTyping(false);
      }, 800);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (isMinimized) {
    return (
      <div className="chatbot-toggle">
        <button onClick={() => setIsMinimized(false)}>
          <MessageCircle size={24} color="#fff" />
        </button>
      </div>
    );
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <span role="img" aria-label="home">🏡</span> Real Estate Assistant
          <p className="chatbot-subtitle">Online • Ready to help</p>
        </div>
        <button onClick={() => setIsMinimized(true)} className="chatbot-minimize">
          <Minimize2 size={16} color="#fff" />
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message-bubble ${msg.role}`}>
            <div className="message-content">
              {msg.content}
              <div className="message-time">{formatTime(msg.timestamp)}</div>
            </div>
            <div className="message-avatar">
              {msg.role === 'assistant' ? <Bot size={14} /> : <User size={14} color="#fff" />}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message-bubble assistant">
            <div className="message-content typing-indicator">
              <div></div><div></div><div></div>
            </div>
            <div className="message-avatar"><Bot size={14} /></div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
          placeholder="Ask about properties, pricing, ROI..."
          disabled={isTyping}
        />
        <button onClick={sendMessage} disabled={!input.trim() || isTyping}>
          <Send size={14} />
        </button>
      </div>

      <div className="quick-actions">
        {['Show properties', 'ROI information', 'Completion status'].map((action) => (
          <button
            key={action}
            onClick={() => {
              setInput(action);
              setTimeout(() => sendMessage(), 100);
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatBot;
