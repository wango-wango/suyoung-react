import "../styles/login.scss";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../sub-pages/AuthContext";
import axios from "axios";

const MLogin = () => {
    const [myform, setMyform] = useState({
        account: "",
        password: "",
    });

    // const [auth, setAuth] = useState(false);

    const { login, sid, setAuth, ...auth } = useContext(AuthContext);

    console.log(auth);

    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;

        setMyform({ ...myform, [id]: val });
    };

    // useEffect(() => {
    //     console.log("auth change!!!!");
    // }, [auth]);

    const navigate = useNavigate();

    const whenSubmit = (event) => {
        event.preventDefault();

        console.log(myform);
        // TODO: 欄位檢查

        fetch("http://localhost:3700/join/login", {
            method: "POST",
            body: JSON.stringify(myform),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((r) => r.json())
            .then((result) => {
                if (result.success) {
                    alert("登入成功，即將跳轉至會員頁面");
                    localStorage.setItem("auth", JSON.stringify(result.data));
                    // setAuth(true);

                    login();
                    navigate("/shuyoung/Member");
                } else if (result.code === 401) {
                    alert("查無此帳號，請先申請會員");
                } else {
                    alert("帳號或密碼錯誤");
                }
            });
    };

    return (
        <>
            <main>
                <Link to="/shuyoung/join/register">會員註冊</Link>
                <div className="login-container">
                    <div className="login-title">舒營-會員登入</div>
                    <div className="login-card">
                        <form onSubmit={whenSubmit}>
                            <div className="title">帳號：</div>
                            <div className="group">
                                <input
                                    className="login-input"
                                    type="text"
                                    id="account"
                                    name="account"
                                    value={myform.account}
                                    onChange={changeFields}
                                    required
                                />
                                <label>Username</label>
                            </div>
                            <div className="title">密碼：</div>
                            <div className="group">
                                <input
                                    className="login-input"
                                    type="text"
                                    id="password"
                                    name="password"
                                    value={myform.password}
                                    onChange={changeFields}
                                    required
                                />
                                <label>Password</label>
                            </div>
                            <div className="login-btn">
                                <button type="submit" className="submit-login">
                                    登入
                                </button>
                            </div>
                        </form>
                        <div className="third-party">
                            <div className="google-login">
                                <Link to="/shuyoung">
                                    login with google
                                    <img
                                        src="/member_img/google-icon.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="facebook-login">
                                <Link to="/shuyoung">
                                    login with facebook
                                    <img
                                        src="/member_img/facebook.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MLogin;
