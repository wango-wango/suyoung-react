import React from "react";

const ForgotPassword = () => {
    return (
        <>
            <div className="reset-password">
                <form>
                    <label className="reset-password">重設密碼：</label>
                    <input className="password-input" type="password" />
                    <button type="submit">送出</button>
                </form>
            </div>
        </>
    );
};

export default ForgotPassword;
