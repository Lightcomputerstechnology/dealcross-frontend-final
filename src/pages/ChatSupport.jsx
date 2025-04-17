// src/pages/ChatSupport.jsx
import React, { useState } from 'react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to chat support!", sender: "system" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Chat Support</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded h-64 overflow-y-auto mb-4">
        {messages.map(msg => (
          <div key={msg.id} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className="inline-block bg-blue-200 dark:bg-blue-600 text-sm px-3 py-1 rounded">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          className="flex-grow px-3 py-2 rounded border dark:bg-gray-900"
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSupport;
