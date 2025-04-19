import React, { useState, useRef, useEffect } from 'react';

const dummyMessages = [
  { id: 1, sender: 'buyer', text: 'Hello, have you shipped the item?' },
  { id: 2, sender: 'seller', text: 'Yes, I sent it this morning via DHL.' },
  { id: 3, sender: 'buyer', text: 'Okay great. Waiting for the tracking code.' },
];

export default function DealChat() {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'buyer',
      text: newMessage,
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 border rounded-lg flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs md:max-w-md p-3 rounded-lg text-sm ${
              msg.sender === 'buyer'
                ? 'ml-auto bg-blue-600 text-white'
                : 'mr-auto bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSend} className="flex border-t p-2 bg-white dark:bg-gray-900">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-md"
        >
          Send
        </button>
      </form>
    </div>
  );
    }
