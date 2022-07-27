import "../styles/login.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MLogin = () => {
    const [myform, setMyform] = useState({
        username: "",
        password: "",
    });

    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        console.log({ id, val });
        setMyform({ ...myform, [id]: val });
    };

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
                console.log(result);
                if (result.success) {
                    localStorage.setItem("auth", JSON.stringify(result.data));
                } else {
                    alert("帳密錯誤");
                }
            });
    };

    return (
        <>
            <main>
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
