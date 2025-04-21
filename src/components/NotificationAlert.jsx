import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi';
import { useNotification } from '@/context/NotificationContext';

const NotificationAlert = () => {
  const { notification } = useNotification();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification.visible) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  if (!visible || !notification.message) return null;

  const isSuccess = notification.type === 'success';

  return (
    <div
      className={`fixed top-5 right-5 z-50 flex items-center justify-between gap-3 p-4 text-sm rounded-lg shadow-lg 
      animate-slideInFromRight transition-all duration-300 max-w-sm
      ${isSuccess
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      }`}
    >
      <div className="flex items-center">
        {isSuccess ? (
          <FiCheckCircle className="w-5 h-5 mr-2" />
        ) : (
          <FiXCircle className="w-5 h-5 mr-2" />
        )}
        <span className="font-medium">{notification.message}</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="hover:opacity-60 transition"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>
  );
};

export default NotificationAlert;
