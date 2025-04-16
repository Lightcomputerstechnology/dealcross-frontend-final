import { Toaster } from 'react-hot-toast';

const NotificationToast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          style: {
            background: '#4BB543',
          },
        },
        error: {
          style: {
            background: '#FF4C4C',
          },
        },
      }}
    />
  );
};

export default NotificationToast;
