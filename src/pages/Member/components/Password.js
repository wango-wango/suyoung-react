import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../Login/sub-pages/AuthProvider";

const Password = () => {

    const {setAuth , ...auth} = useAuth();

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        comfirmPassword: "",
    });

    const [passwordType1, setPasswordType1] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");
    const [passwordType3, setPasswordType3] = useState("password");

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
                `http://localhost:3700/member/updatePassword/${auth.m_id}`,
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
                                type={passwordType1}
                                onChange={handleFieldsChange}
                            />
                            <button
                                type="button"
                                className="member-eye-button"
                                onClick={() => {
                                    setPasswordType1(
                                        passwordType1 === "text"
                                            ? "password"
                                            : "text"
                                    );
                                }}
                            >
                                {passwordType1 === "text" ? (
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
                                type={passwordType2}
                                onChange={handleFieldsChange}
                            />
                            <button
                                type="button"
                                className="member-eye-button"
                                onClick={() => {
                                    setPasswordType2(
                                        passwordType2 === "text"
                                            ? "password"
                                            : "text"
                                    );
                                }}
                            >
                                {passwordType2 === "text" ? (
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
                                type={passwordType3}
                                onChange={handleFieldsChange}
                            />
                            <button
                                type="button"
                                className="member-eye-button"
                                onClick={() => {
                                    setPasswordType3(
                                        passwordType3 === "text"
                                            ? "password"
                                            : "text"
                                    );
                                }}
                            >
                                {passwordType3 === "text" ? (
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
