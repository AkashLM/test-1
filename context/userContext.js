import { createContext, useState, useEffect } from "react";
import { magicClient } from "../lib/magic";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateUser = (userData) => {
    setIsLoggedIn(!!userData);

    if (userData) {
      setUser(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      setUser(null);
      localStorage.removeItem("userData");
    }
  };

  useEffect(() => {
    // ========== logout ==============
    // async function logout() {
    //   await magicClient.user.logout();
    //   updateUser(null);
    // }
    // logout();

    // ============= Check login status on first load =============
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      updateUser(userData);
    }
    // console.log(isLoggedIn);
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
