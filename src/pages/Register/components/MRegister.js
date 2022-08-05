import React, { useState } from "react";
import "../../Login/styles/login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";

//============前端驗證=============

const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;

const validate = (values) => {
    const errors = {};

    if (!values.account) {
        errors.account = "帳號不可為空";
    } else if (values.account.length > 15) {
        errors.account = "帳號不可超過十五字";
    } else if (values.account.length < 5) {
        errors.account = "帳號至少需要五字";
    }

    if (!values.password) {
        errors.password = "密碼不可為空";
    } else if (values.password.length < 6) {
        errors.password = "密碼至少需要六個字";
    } else if (values.password === "123456") {
        errors.password = "請輸入強度更高的密碼";
    }

    if (!values.email) {
        errors.email = "電子郵件欄不可為空";
    } else if (!emailReg.test(values.email)) {
        errors.email = "電子郵件不符合格式";
    }
    return errors;
};

//=============前端驗證結束==========

const MRegister = () => {
    //hooks==============================

    const [passwordType, setPasswordType] = useState("password");

    //hooks end ================================

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            account: "",
            password: "",
            email: "",
        },

        validate,

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    let showAccountError = formik.touched.account && formik.errors.account;

    let showPasswordError = formik.touched.password && formik.errors.password;

    let showEmailError = formik.touched.email && formik.errors.email;

    const whenSubmit = async (e) => {
        // e.preventDefault();

        const formInfo = {
            account: formik.values.account,
            password: formik.values.password,
            email: formik.values.email,
        };

        const { ...registerFields } = formInfo;

        console.log(registerFields);

        const res = await axios.post(
            "http://localhost:3700/join/register",
            registerFields
        );

        if (res.data.message === "fail") {
            alert("使用者名稱已經存在");
        } else if (res.data.message === "缺少資料") {
            alert("資料填寫不完整");
        } else {
            alert("註冊成功！即將跳轉回登入頁面...");
            navigate("/shuyoung/Join");
        }
    };

    return (
        <>
            <main>
                <div className="login-container">
                    <div className="login-title">舒營-會員註冊</div>
                    <div className="login-card">
                        <Formik
                            initialValues={formik.initialValues}
                            onSubmit={whenSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="account-title">帳號：</div>
                                    <div className="account-group">
                                        <Field
                                            autoComplete="off"
                                            className="login-input"
                                            name="account"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.account}
                                            type="text"
                                        />
                                        {showAccountError ? (
                                            <span id="error-text">
                                                {formik.errors.account}
                                            </span>
                                        ) : null}

                                        <label>Username</label>
                                    </div>
                                    <div className="account-title">密碼：</div>
                                    <div className="account-group">
                                        <Field
                                            autoComplete="off"
                                            className="login-input"
                                            name="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            type={passwordType}
                                        />
                                        {showPasswordError ? (
                                            <span id="error-text">
                                                {formik.errors.password}
                                            </span>
                                        ) : null}
                                        <button
                                            type="button"
                                            className="member-eye-button"
                                            onClick={() => {
                                                setPasswordType(
                                                    passwordType === "text"
                                                        ? "password"
                                                        : "text"
                                                );
                                            }}
                                        >
                                            {passwordType === "text" ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </button>

                                        <label>Password</label>
                                    </div>
                                    <div className="account-title">email:</div>
                                    <div className="account-group">
                                        <Field
                                            autoComplete="off"
                                            className="login-input"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            name="email"
                                            value={formik.values.email}
                                            type="text"
                                        />
                                        {showEmailError ? (
                                            <span id="error-text">
                                                {formik.errors.email}
                                            </span>
                                        ) : null}

                                        <label>email</label>
                                    </div>
                                    <div className="login-btn">
                                        <button
                                            type="submit"
                                            className="submit-login"
                                            disabled={isSubmitting}
                                        >
                                            註冊
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

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

export default MRegister;
