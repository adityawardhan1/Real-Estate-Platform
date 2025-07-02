import React, { useState } from 'react';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Error:', err);
    }

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border rounded shadow-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-2 font-semibold">🏡 Real Estate Assistant</div>
      <div className="h-64 overflow-y-auto p-2 bg-gray-100">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded ${msg.role === 'user' ? 'bg-blue-200' : 'bg-gray-300'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex p-2 border-t bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 border px-2 py-1 rounded"
          placeholder="Ask something..."
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 rounded">Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
