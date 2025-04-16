import { Toaster } from 'react-hot-toast';

const NotificationToast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#1f2937',
          color: '#fff',
          borderRadius: '0.5rem',
        },
      }}
    />
  );
};

export default NotificationToast;
