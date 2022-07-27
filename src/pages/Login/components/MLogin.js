import "../styles/login.scss";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MLogin = () => {
    return (
        <>
            <main>
                <div className="login-container">
                    <div className="login-title">舒營-會員登入</div>
                    <div className="login-card">
                        <form>
                            <div className="title">帳號：</div>
                            <div className="group">
                                <input type="text" required />
                                <label>Username</label>
                            </div>
                            <div className="title">密碼：</div>
                            <div className="group">
                                <input type="text" required />
                                <label>Password</label>
                            </div>
                            <div className="login-btn">
                                <button className="submit-login">登入</button>
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
