import React from "react";
import "../../style";
import "./styles/login";

const login = () => {
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
                            <div className="btn">
                                <button className="submit-login">登入</button>
                            </div>
                        </form>
                        <div className="third-party">
                            <div className="google-login">
                                <a href="#">
                                    login with google
                                    <img
                                        src="../../../public/member_img/google-icon.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="facebook-login">
                                <a href="#">
                                    login with facebook
                                    <img
                                        src="../../../public/member_img/facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default login;
