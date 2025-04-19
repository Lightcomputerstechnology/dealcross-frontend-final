import React, { useState } from 'react';

const DealChatRoom = ({ dealId }) => {
  const [messages, setMessages] = useState([
    { from: 'buyer', text: 'Is the item ready for delivery?' },
    { from: 'seller', text: 'Yes, I’ll ship it today.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'you', text: input }]);
    setInput('');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow mt-8">
      <h3 className="text-lg font-semibold mb-3">Chat with Counterparty</h3>
      <div className="h-48 overflow-y-auto bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-2 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md max-w-[80%] ${
              msg.from === 'you'
                ? 'bg-blue-600 text-white ml-auto'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
          >
            <span className="block text-sm">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex mt-3 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DealChatRoom;
