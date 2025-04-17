// File: src/pages/ChatSupport.jsx

import React, { useState } from 'react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    { sender: 'you', text: 'Hi, did you receive the delivery?', time: '09:45 AM' },
    { sender: 'partner', text: 'Yes, reviewing it now.', time: '09:46 AM' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      sender: 'you',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Deal Chat</h2>

      <div className="flex-1 overflow-y-auto bg-[#1e293b] rounded-lg p-4 mb-4 shadow-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 flex flex-col ${
              msg.sender === 'you' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === 'you' ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
            <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded bg-gray-800 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatSupport;
