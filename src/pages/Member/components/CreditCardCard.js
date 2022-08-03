import React from "react";

const CreditCardCard = (props) => {
    const { auth } = props;
    return (
        <>
            <div className="credit-card">
                <div className="info">
                    <i className="fa-brands fa-cc-visa fa-xl"></i>
                    <div className="bank">中華郵政</div>
                    <div>(**** 1784)</div>
                </div>
                <div className="delete">
                    <button>刪除</button>
                </div>
            </div>
        </>
    );
};

export default CreditCardCard;
