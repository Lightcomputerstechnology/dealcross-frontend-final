import React, { createContext, useContext, useState, useCallback } from 'react';

// Creating a Notification context
const NotificationContext = createContext();

// Notification provider to handle global state
export const NotificationProvider = ({ children }) => {
  // State to store the queue of notifications
  const [notificationQueue, setQueue] = useState([]);

  // Function to add a notification to the queue
  const addNotification = useCallback((type, message, duration = 5000) => {
    const newNotification = { type, message, visible: true, id: Date.now(), duration };
    setQueue((prev) => [...prev, newNotification]);
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, duration);
  }, []);

  // Function to remove a notification by ID
  const removeNotification = (id) => {
    setQueue((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationQueue,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification context
export const useNotification = () => useContext(NotificationContext);
