import React, { useState, useEffect } from "react";

import axios from "axios";

import AuthContext from "./AuthContext";

import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
    const unAuthState = {
        authorized: false,
        sid: 0,
        account: "",
        token: "",
    };

    //check if localStorage has member token

    const localAuthStr = localStorage.getItem("auth");

    let localAuth = { ...unAuthState };

    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);

            if (localAuth.token) {
                localAuth = { ...localAuth, authorized: true };
                console.log(localAuth);
            }
        } catch (ex) {}
    }

    const [auth, setAuth] = useState(localAuth);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("auth");
        setAuth({ ...unAuthState, authorized: false });
        navigate("/Shuyoung/login");
    };

    const login = () => {
        setAuth({ ...localAuth, authorized: true });
    };

    // const checkAuth = async () => {
    //     const res = await axios.get("http://localhost:3700/join/check-login", {
    //         withCredentials: true,
    //     });

    //     if (res.data.message === "authorized") {
    //         const userId = res.data.user.userId;
    //         setAuth({ isAuth: true, userId });
    //     }
    // };

    // useEffect(() => {
    //     checkAuth();
    // }, []);

    return (
        <AuthContext.Provider
            value={{
                ...auth,
                setAuth,
                logout,
                login,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
