// File: src/components/NotificationAlert.jsx
import React from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const NotificationAlert = ({ type, message }) => {
  const isSuccess = type === 'success';

  return (
    <div className={`flex items-center p-4 mb-4 text-sm rounded-lg shadow-md 
      ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
      {isSuccess ? (
        <FiCheckCircle className="w-5 h-5 mr-2" />
      ) : (
        <FiXCircle className="w-5 h-5 mr-2" />
      )}
      <span>{message}</span>
    </div>
  );
};

export default NotificationAlert;
