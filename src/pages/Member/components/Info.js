import React from "react";
import "../styles/member-form.scss";

const Info = () => {
    return (
        <>
            <div className="member-body">
                <div className="title">會員資料</div>
                <div className="form-container">
                    <div className="left">
                        <form action="">
                            <div className="name">
                                <div>
                                    <div className="last-name">姓：</div>
                                    <div className="input_group">
                                        <input type="text" placeholder="姓" />
                                    </div>
                                </div>
                                <div>
                                    <div className="last-name">名：</div>
                                    <div className="input_group">
                                        <input type="text" placeholder="名" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="last-name">會員生日：</div>
                                <div className="input_group">
                                    <input type="date" />
                                </div>
                            </div>
                            <div>
                                <div className="last-name">電子郵件：</div>
                                <div className="input_group">
                                    <input
                                        type="email"
                                        placeholder="電子郵件"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="last-name">行動電話：</div>
                                <div className="input_group">
                                    <input type="tel" placeholder="行動電話" />
                                </div>
                            </div>
                            <div>
                                <div>會員地址：</div>
                                <select name="city" id="city">
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
                                <div className="input_group">
                                    <input type="text" placeholder="地址" />
                                </div>
                            </div>
                            <button type="submit">更新檔案</button>
                        </form>
                    </div>
                    <div className="right">
                        <div className="title">上傳大頭貼：</div>
                        <div>
                            <label htmlFor="file" className="file-input">
                                <div className="drop-zone">
                                    <p className="para">請選擇檔案或拖曳檔案</p>
                                </div>
                                <input
                                    type="file"
                                    id="file"
                                    multiple
                                    accept="image/*"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
