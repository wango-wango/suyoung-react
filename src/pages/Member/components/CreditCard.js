import React from "react";
import { Link } from "react-router-dom";
import "../styles/member-credit-card.scss";

const CreditCard = () => {
    return (
        <>
            {" "}
            <div className="member-body">
                <div className="title">信用卡管理</div>
                <div className="credit-card-container">
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
                    <div className="card-btn">
                        <button className="new-card">新增信用卡</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreditCard;
