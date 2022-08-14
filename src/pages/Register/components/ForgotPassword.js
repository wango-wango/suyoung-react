import React ,{useState ,serializeFormQuery} from "react";
import axios from 'axios';
import {useAuth}  from '../../Login/sub-pages/AuthProvider';
import { useSearchParams } from "react-router-dom";

const ForgotPassword = () => {

    const {  setAuth , ...auth} = useAuth();


    const [password, setPassword] = useState({
        newPassword: "",
        comfirmPassword: "",
    });

    const handleFieldsChange = (e) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value,
        });
    };

    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("email");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        
        if(!password.newPassword.length || !password.comfirm.length){
            alert("請填入密碼");
        }else if (password.newPassword !== password.comfirmPassword) {
            alert("新密碼與確認密碼不符");
        }  else {
            const res = await axios.put(
                `http://localhost:3700/member/reset-password`,
                password
            );
            console.log(res);

            if (res.data.success === true) {
                alert("修改完成");
            } else {
                alert("有錯誤");
            }
        }
    }

   


    return (
        <>
            <div className="reset-password">
                <form onSubmit={handleSubmit}>
                    <label className="reset-password">重設密碼：</label>
                    <input name="newPassword" className="password-input" onChange={handleFieldsChange} type="password" />
                    <label className="reset-password">確認密碼：</label>
                    <input name="comfirmPassword" className="password-comfirm" onChange={handleFieldsChange} type="password" />
                    <button type="submit">送出</button>
                </form>
            </div>
        </>
    );
};

export default ForgotPassword;
