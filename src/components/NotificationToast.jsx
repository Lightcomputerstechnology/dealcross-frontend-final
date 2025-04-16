import { Toaster } from 'react-hot-toast';

const NotificationToast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#333',
          color: '#fff',
          fontSize: '14px',
        },
        success: {
          icon: '✅',
        },
        error: {
          icon: '❌',
        },
      }}
    />
  );
};

export default NotificationToast;
