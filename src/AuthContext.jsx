
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const stored = localStorage.getItem("adminUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = (username) => {
    const adminUser = { name: username, role: "admin" };
    setUser(adminUser);
    localStorage.setItem("adminUser", JSON.stringify(adminUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
