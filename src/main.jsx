import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { NotificationProvider } from './context/NotificationContext';
import { UserProvider } from './context/UserContext';
import NotificationAlert from './components/NotificationAlert';
import './index.css'; // Tailwind and global styles

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <NotificationProvider>
          <UserProvider>
            <div className="animate-fade-in">
              <AppRoutes />
              <NotificationAlert />
            </div>
          </UserProvider>
        </NotificationProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Make sure there's a <div id='root'></div> in index.html.");
}

// Fade-in animation
const style = document.createElement('style');
style.innerHTML = `
  .animate-fade-in {
    animation: fadeIn 0.8s ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);
