// File: src/hooks/useAuthRedirect.js

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/api'; // Assuming this API returns user info
import { toast } from 'react-hot-toast';

export default function useAuthRedirect(options = {}) {
  const { adminOnly = false } = options;
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please log in first.');
        return navigate('/login');
      }

      try {
        const user = await getCurrentUser();
        if (adminOnly && user.role !== 'admin') {
          toast.error('Access denied. Admins only.');
          return navigate('/');
        }
      } catch (err) {
        toast.error('Session expired. Please log in again.');
        localStorage.removeItem('token');
        return navigate('/login');
      }
    };

    checkAuth();
  }, [adminOnly, navigate]);
}
