import React from "react";

const MRegister = () => {
    return (
        <>
            <main>
                <div className="login-container">
                    <div className="login-title">舒營-會員註冊</div>
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
                            <div className="title">email:</div>
                            <div className="group">
                                <input type="email" required />
                                <label>email</label>
                            </div>
                            <div className="btn">
                                <button className="submit-login">註冊</button>
                            </div>
                        </form>
                        <div className="third-party">
                            <div className="google-login">
                                <a href="#">
                                    signin with google
                                    <img src="./src/google-icon.svg" alt="" />
                                </a>
                            </div>
                            <div className="facebook-login">
                                <a href="#">
                                    signin with facebook
                                    <img src="./src/facebook.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MRegister;
