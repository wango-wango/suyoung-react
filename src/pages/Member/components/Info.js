import React, { useContext, useEffect, useState } from "react";
import "../styles/member-form.scss";
import { motion } from "framer-motion";
import { MemberInfo } from "../../Login/sub-pages/MemberProvider";
import AuthContext from "../../Login/sub-pages/AuthContext";

import TWZipCode from "./TWZipCode";
import axios from "axios";

const Info = (props) => {
    const { member } = props;

    const { memberData, setMemberData } = MemberInfo();

    const [selectedFile, setSelectedFile] = useState(null);

    const [isFilePicked, setIsFilePicked] = useState(false);

    const [preview, setPreview] = useState("");

    const [imgServerUrl, setImgServerUrl] = useState("");

    //選擇檔案更動時建立預覽圖

    const { ...auth } = useContext(AuthContext);

    const [fields, setFields] = useState({
        m_id: member.m_id,
        lastname: member.m_last_name,
        avatar: member.m_avatar,
        firstname: member.m_first_name,
        birthday: member.m_birthday,
        email: member.m_email,
        phone: member.m_phone,
        address: member.m_addr,
        county: member.m_city,
        area: member.m_area,
    });

    const handleFieldsChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const res = await axios.put(
            `http://localhost:3700/member/${member.m_id}`,
            fields
        );

        console.log(res);
    };

    const changeHandler = (e) => {
        const file = e.target.files[0];

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

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append("avatar", selectedFile);

        fetch(
            "http://localhost:3700/member/upload-avatar", //server url
            {
                method: "POST",
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setImgServerUrl(
                    "http://localhost:3700/avatar_img/" + result.data.name
                );
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        if (imgServerUrl) {
            setMemberData({ ...memberData, m_avatar: imgServerUrl });
        }
    }, [imgServerUrl]);

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
                                            defaultValue={member.m_last_name}
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
                                            defaultValue={member.m_first_name}
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
                                        defaultValue={member.m_birthday}
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
                                        defaultValue={member.m_email}
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
                                        defaultValue={member.m_phone}
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
                                        defaultValue={member.m_addr}
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
                            <button onClick={handleSubmission}>送出</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Info;
