import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const colorMap = {
  success: 'bg-green-600 text-white border-green-400',
  error: 'bg-red-600 text-white border-red-400',
  info: 'bg-blue-600 text-white border-blue-400',
  warning: 'bg-yellow-500 text-black border-yellow-300',
};

const NotificationAlert = ({ type = 'info', message = '', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`w-full max-w-xl mx-auto px-4 py-3 mb-4 border rounded shadow transition-all duration-300 animate-fade-in ${colorMap[type]}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-sm font-bold focus:outline-none"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

NotificationAlert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  duration: PropTypes.number,
};

export default NotificationAlert;
