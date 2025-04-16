import React, { useState } from 'react';

const DealChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: 'You', text: 'Hello, I’ve marked the deal as delivered.', time: '10:00 AM' },
    { sender: 'Buyer', text: 'Received, I’ll confirm shortly.', time: '10:01 AM' },
  ]);
  const [input, setInput] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSend = () => {
    if (input.trim() === '' && !attachment) return;

    const newMessage = {
      sender: 'You',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setAttachment(null);
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 w-full max-w-2xl mx-auto mt-4">
      <div className="h-64 overflow-y-auto border border-gray-300 dark:border-gray-700 rounded-md mb-4 p-2 space-y-2 bg-gray-50 dark:bg-gray-800">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              msg.sender === 'You'
                ? 'bg-blue-100 dark:bg-blue-600 text-right ml-12'
                : 'bg-gray-200 dark:bg-gray-700 mr-12'
            }`}
          >
            <p className="text-sm font-semibold">{msg.sender}</p>
            <p className="text-sm">{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.time}</span>
          </div>
        ))}
      </div>

      {attachment && (
        <div className="mb-2 text-sm text-green-600 dark:text-green-400">
          Attached: {attachment.name}
        </div>
      )}

      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none dark:bg-gray-800"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="file"
          id="attachment"
          className="hidden"
          onChange={(e) => setAttachment(e.target.files[0])}
        />
        <label
          htmlFor="attachment"
          className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          📎
        </label>
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DealChatBox;
