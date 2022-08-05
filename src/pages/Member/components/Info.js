import React, { useContext, useEffect, useState } from "react";
import "../styles/member-form.scss";
import { motion } from "framer-motion";
import { MemberInfo } from "../../Login/sub-pages/MemberProvider";
import { useAuth } from "../../Login/sub-pages/AuthProvider";

import TWZipCode from "./TWZipCode";
import axios from "axios";

const Info = () => {
    const { setAuth, ...auth } = useAuth();

    const [selectedFile, setSelectedFile] = useState(null);

    const [isFilePicked, setIsFilePicked] = useState(false);

    const [preview, setPreview] = useState("");

    const [imgServerUrl, setImgServerUrl] = useState("");

    //選擇檔案更動時建立預覽圖

    const [fields, setFields] = useState({
        m_id: auth.m_id,
        lastname: auth.m_last_name,
        firstname: auth.m_first_name,
        avatar: auth.m_avatar,
        birthday: auth.m_birthday,
        email: auth.m_email,
        phone: auth.m_phone,
        address: auth.m_addr,
        county: auth.m_city,
        area: auth.m_area,
    });

    const getUserData = () => {
        axios.get(`http://localhost:3700/member/${auth.m_id}`).then((res) => {
            if (res) {
                console.log(res.data.user);
                setAuth({ ...auth, ...res.data.user });
            } else {
                alert("查無會員資料");
            }
        });
    };

    const handleFieldsChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const res = await axios.put(
            `http://localhost:3700/member/${auth.m_id}`,
            fields
        );

        alert("資料修改完成");

        getUserData();

        console.log(res);
    };

    const changeHandler = (e) => {
        const file = e.target.files[0];

        console.log(file.name);

        if (file) {
            setIsFilePicked(true);
            setSelectedFile(file);
            // setImgServerUrl("");
        } else {
            setIsFilePicked(false);
            setSelectedFile(null);
            // setImgServerUrl("");
        }
    };

    // const handleSubmission = () => {
    //     const formData = new FormData();

    //     formData.append("avatar", selectedFile);

    //     fetch(
    //         "http://localhost:3700/member/upload-avatar", //server url
    //         {
    //             method: "POST",
    //             body: formData,
    //         }
    //     )
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result);
    //             setImgServerUrl(
    //                 "http://localhost:3700/avatar_img/" + result.data.name
    //             );
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         });
    // };

    const tryUpload = async () => {
        const url = {
            avatar: `http://localhost:3700/avatar_img/${selectedFile.name}`,
            sid: auth.m_id,
        };

        const res = await axios.put(
            "http://localhost:3700/member/try-upload",
            url
        );

        setImgServerUrl(url.avatar);

        setAuth({ ...auth, m_avatar: url.avatar });

        // getUserData();

        console.log(res);
    };

    // useEffect(() => {
    //     if (imgServerUrl !== "") {
    //     }
    // }, [imgServerUrl]);

    useEffect(() => {
        if (!selectedFile) {
            setPreview("");
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        console.log(objectUrl);
        setPreview(objectUrl);

        // 當元件unmounted時清除記憶體
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    //拖曳上傳
    useEffect(() => {
        const label = document.querySelector(".file-input");
        const input = document.querySelector("#file");
        const para = document.querySelector(".para");
        const avatar = document.querySelector(".avatar");

        // const dropZone = document.querySelector(".drop-zone");

        // if (avatar.src !== "") {
        //     label.classList.add("light-active");
        //     para.style.display = "none";
        // }

        input.addEventListener("change", (e) => {
            label.classList.add("light-active");
            para.style.display = "none";
        });

        // label.addEventListener("click", (e) => {
        //     input.click();
        // });
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="member-body"
            >
                <div className="member-title">會員資料</div>
                <div className="form-container">
                    <div className="left">
                        <form onSubmit={handleUpdate}>
                            <div className="name">
                                <div>
                                    <div className="last-name">姓：</div>
                                    <div className="input_group">
                                        <input
                                            name="lastname"
                                            type="text"
                                            placeholder="姓"
                                            defaultValue={auth.m_last_name}
                                            onChange={handleFieldsChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="last-name">名：</div>
                                    <div className="input_group">
                                        <input
                                            type="text"
                                            name="firstname"
                                            placeholder="名"
                                            defaultValue={auth.m_first_name}
                                            onChange={handleFieldsChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="last-name">會員生日：</div>
                                <div className="input_group">
                                    <input
                                        name="birthday"
                                        type="date"
                                        defaultValue={auth.m_birthday}
                                        onChange={handleFieldsChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="last-name">電子郵件：</div>
                                <div className="input_group">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="電子郵件"
                                        defaultValue={auth.m_email}
                                        onChange={handleFieldsChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="last-name">行動電話：</div>
                                <div className="input_group">
                                    <input
                                        name="phone"
                                        type="text"
                                        placeholder="行動電話"
                                        defaultValue={auth.m_phone}
                                        onChange={handleFieldsChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>會員地址：</div>
                                {/* <select name="city" id="city">
                                    <option value="" disabled selected>
                                        請選擇
                                    </option>
                                </select>
                                縣/市
                                <select name="area" id="area">
                                    <option value="" disabled selected>
                                        請選擇
                                    </option>
                                </select>
                                區
                                 */}
                                <TWZipCode
                                    fields={fields}
                                    setFields={setFields}
                                />
                                <div className="input_group">
                                    <input
                                        name="address"
                                        type="text"
                                        defaultValue={auth.m_addr}
                                        placeholder="地址"
                                        onChange={handleFieldsChange}
                                    />
                                </div>
                            </div>

                            <button type="submit">更新檔案</button>
                        </form>
                    </div>
                    <div className="right">
                        <div className="member-title">上傳大頭貼：</div>
                        <div>
                            <label htmlFor="file" className="file-input">
                                <div className="drop-zone">
                                    <p className="para">請選擇檔案</p>
                                    {preview === "" ? null : (
                                        <img
                                            className="avatar"
                                            src={preview}
                                            alt=""
                                        />
                                    )}
                                </div>
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    accept="image/*"
                                    onChange={changeHandler}
                                />
                            </label>
                            <button
                                className="avatar-check"
                                onClick={tryUpload}
                            >
                                確定
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Info;
