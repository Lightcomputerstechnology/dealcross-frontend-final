import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from '@/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (err) {
        setUser(null); // No user or token invalid
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export const useRequireAdmin = () => {
  const { user, loading } = useUser();

  if (!loading && user?.role !== 'admin') {
    throw new Error('Access denied: Admins only');
  }

  return { user };
};
  
