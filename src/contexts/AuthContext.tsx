import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'customer' | 'driver' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string, role: UserRole) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('neoride_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Check for admin login
    if (email === 'admin@neoride.com' && password === 'admin123') {
      const adminUser: User = {
        id: 'admin-1',
        email,
        name: 'Admin',
        role: 'admin'
      };
      setUser(adminUser);
      localStorage.setItem('neoride_user', JSON.stringify(adminUser));
      return true;
    }

    // Mock authentication - in real app, this would be API call
    if (password.length >= 6) {
      const newUser: User = {
        id: Date.now().toString(),
        email,
        name: email.split('@')[0],
        role: 'customer'
      };
      setUser(newUser);
      localStorage.setItem('neoride_user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string, name: string, role: UserRole): boolean => {
    if (password.length >= 6 && email && name) {
      const newUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role
      };
      setUser(newUser);
      localStorage.setItem('neoride_user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('neoride_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};