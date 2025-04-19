import React, { useState, useEffect } from 'react';

const DealChatRoom = ({ dealId }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'buyer', text: 'Is the item ready for delivery?' },
    { from: 'seller', text: 'Yes, I’ll ship it today.' },
  ]);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get role from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    setUserRole(user?.role || 'guest'); // fallback role
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    if (!userRole) return alert('User role not found.');
    setMessages([...messages, { from: userRole, text: input }]);
    setInput('');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow mt-8">
      <h3 className="text-lg font-semibold mb-3">Chat with Counterparty (Deal #{dealId})</h3>

      <div className="h-64 overflow-y-auto bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-3 space-y-3">
        {messages.map((msg, idx) => {
          const isYou = msg.from === userRole;
          const alignment = isYou ? 'text-right' : 'text-left';
          const bubbleColor = isYou
            ? 'bg-blue-600 text-white'
            : msg.from === 'seller'
            ? 'bg-gray-700 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white';

          const label = isYou
            ? 'You'
            : msg.from.charAt(0).toUpperCase() + msg.from.slice(1);

          return (
            <div key={idx} className={`${alignment}`}>
              <div className={`inline-block px-4 py-2 rounded-md ${bubbleColor}`}>
                <div className="text-xs font-medium mb-1">[{label}]</div>
                <div className="text-sm">{msg.text}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex mt-4 gap-2">
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
