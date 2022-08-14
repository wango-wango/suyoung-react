import React from "react";
import "../styles/member-order-list.scss";
import { motion } from "framer-motion";
import OrderListGroup from "./OrderListGroup";

const OrderList = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="member-body"
            >
                <div className="keep-title">訂單記錄</div>
                <div className="checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="one-month"
                            value="one-month"
                        />
                        <span className="round button">一個月內</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="three-month"
                            value="three-month"
                        />
                        <span className="round button">三個月內</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="six-month"
                            value="six-month"
                        />
                        <span className="round button">六個月內</span>
                    </label>
                </div>
                <div className="order-list-container">
                    <OrderListGroup />
                </div>
            </motion.div>
        </>
    );
};

export default OrderList;
