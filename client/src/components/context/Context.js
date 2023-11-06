import React, { useContext, useEffect, useState } from "react";

export const authContext = React.createContext();

const setTokenMiddle = (setTokenFunc) => {
    return (tokenToSet) => {
        setTokenFunc(tokenToSet);
        if (!tokenToSet) {
            localStorage.removeItem("token");
            return;
        }
        localStorage.setItem("token", tokenToSet);
    };
};

const setUserMiddle = (setUserFunc) => {
    return (userToSet) => {
        setUserFunc(userToSet);
        if (!userToSet) {
            localStorage.removeItem("user");
            return;
        }
        localStorage.setItem("user", JSON.stringify(userToSet));
    };
};

export const useAuthContext = () => {
    const { token, setToken, currentUser, setCurrentUser } =
        useContext(authContext);
    return {
        token,
        setToken: setTokenMiddle(setToken),
        currentUser,
        setCurrentUser: setUserMiddle(setCurrentUser),
    };
};

export const useToken = () => {
    const { token, setToken } = useContext(authContext);
    return { token, setToken: setTokenMiddle(setToken) };
};

export const useUser = () => {
    const { currentUser, setCurrentUser } = useContext(authContext);
    return { currentUser, setCurrentUser: setUserMiddle(setCurrentUser) };
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );
    const [token, setToken] = useState(localStorage.getItem("token"));

    // useEffect(() => {
    //     const savedToken = localStorage.getItem("token");
    //     if (savedToken) setToken(savedToken);
    //     const savedUser = localStorage.getItem("user");
    //     if (savedUser) setCurrentUser(JSON.parse(savedUser));
    // }, []);

    return (
        <authContext.Provider
            value={{ token, setToken, currentUser, setCurrentUser }}
        >
            {children}
        </authContext.Provider>
    );
};
