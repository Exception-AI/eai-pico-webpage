import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  user: null, // { email: string } or null
  isAuthenticated: false, // boolean
  login: (email) => {}, // fn to mark “logged in”
  logout: () => {}, // fn to clear login
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On first load, pull from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = (email) => {
    const u = { email };
    setUser(u);
    localStorage.setItem("loggedInUser", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
