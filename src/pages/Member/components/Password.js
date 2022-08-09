import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = (props) => {
    const { member } = props;

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        comfirmPassword: "",
    });

    const [passwordType, setPasswordType] = useState("password");

    const handleFieldsChange = (e) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (password.oldPassword === password.newPassword) {
            alert("舊密碼不可與新密碼相同");
        } else if (password.newPassword !== password.comfirmPassword) {
            alert("新密碼與確認密碼不符");
        } else {
            const res = await axios.put(
                `http://localhost:3700/member/updatePassword/${member.m_id}`,
                password
            );
            console.log(res);

            if (res.data.success === true) {
                alert("修改完成");
            } else {
                alert("有錯誤");
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="member-body"
        >
            <div className="member-title">修改密碼</div>
            <div className="update-password">
                <form onSubmit={handleUpdate}>
                    <div>
                        <div className="update-password">請輸入舊密碼：</div>
                        <div className="input_group">
                            <input
                                name="oldPassword"
                                type={passwordType}
                                onChange={handleFieldsChange}
                            />
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
                        </div>
                    </div>
                    <div>
                        <div className="update-password">請輸入新密碼：</div>
                        <div className="input_group">
                            <input
                                name="newPassword"
                                type={passwordType}
                                onChange={handleFieldsChange}
                            />
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
                        </div>
                    </div>
                    <div>
                        <div className="update-password">確認新密碼：</div>
                        <div className="input_group">
                            <input
                                name="comfirmPassword"
                                type={passwordType}
                                onChange={handleFieldsChange}
                            />
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
                        </div>
                    </div>
                    <button className="submit-password" type="submit">
                        修改密碼
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Password;
