import React, { useContext, useEffect, useState } from "react";

export const authContext = React.createContext();

const setTokenMiddle = (setTokenFunc) => {
  return (tokenToSet) => {
    setTokenFunc(tokenToSet);
    // console.log("token:", tokenToSet);
    if (!tokenToSet) {
      //   console.log(1);
      localStorage.removeItem("token");
      return;
    }
    localStorage.setItem("token", tokenToSet);
  };
};

export const useAuthContext = () => {
  const { token, setToken, currentUser, setCurrentUser } =
    useContext(authContext);
  return {
    token,
    setToken: setTokenMiddle(setToken),
    currentUser,
    setCurrentUser,
  };
};

export const useToken = () => {
  const { token, setToken } = useContext(authContext);
  return { token, setToken: setTokenMiddle(setToken) };
};

export const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(authContext);
  return { currentUser, setCurrentUser };
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
    // const savedUser = localStorage.getItem("user");
    // if (savedUser) setCurrentUser(savedUser);
  }, []);

  return (
    <authContext.Provider
      value={{ token, setToken, currentUser, setCurrentUser }}
    >
      {children}
    </authContext.Provider>
  );
};
