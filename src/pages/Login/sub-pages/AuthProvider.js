import React, { useState, useEffect, createContext, useContext } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    authorized: false,
    sid: 0,
    account: "",
    token: "",
});

export const AuthProvider = ({ children }) => {
    const unAuthState = {
        authorized: false,
        sid: 0,
        account: "",
        token: "",
    };
    // 先查看 localStorage 的資料是否表示已登入
    const localAuthStr = localStorage.getItem("auth");
    let localAuth = { ...unAuthState };
    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);
            if (localAuth.account && localAuth.token) {
                localAuth = { ...localAuth };
            }
        } catch (ex) {}
    }
    const [auth, setAuth] = useState({ ...localAuth.row, authorized: true });

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("auth");
        setAuth({ authorized: false, sid: 0, token: "" });
        navigate("/Shuyoung/login");
    };

    // // const getUserData = async () => {};

    // const login = async () => {
    //     setAuth({ ...localAuth, authorized: true });
    //     await axios
    //         .get(`http://localhost:3700/member/${auth.sid}`)
    //         .then((res) => {
    //             if (res) {
    //                 console.log(res.data.user);
    //                 setMemberData({ ...res.data.user });
    //             } else {
    //                 alert("查無會員資料");
    //             }
    //         });
    // };

    return (
        <AuthContext.Provider
            value={{
                ...auth,
                setAuth,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
