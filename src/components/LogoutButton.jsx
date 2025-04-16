import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LogoutButton = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session (simulate)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowConfirm(true)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Logout
      </button>

      {showConfirm && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
          <div className="p-4 text-gray-700 text-sm">
            Are you sure you want to log out?
          </div>
          <div className="flex justify-end space-x-2 p-2">
            <button
              onClick={() => setShowConfirm(false)}
              className="px-3 py-1 text-sm text-gray-600 hover:text-black"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
