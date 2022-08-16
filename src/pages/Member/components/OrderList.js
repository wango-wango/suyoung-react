import React, { useEffect, useState } from "react";
import "../styles/member-order-list.scss";
import { motion } from "framer-motion";
import OrderListGroup from "./OrderListGroup";
import { useAuth } from "../../Login/sub-pages/AuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'

const OrderList = () => {
    const { setAuth, ...auth } = useAuth();

    const [orderList, setOrderList] = useState([]);

    const monthOptions = ["一個月內", "三個月內", "六個月內"];

    const [month, setMonth] = useState(monthOptions[0]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `http://localhost:3700/member/getOrderList/${auth.m_id}/?month=${month}`
            );

            setOrderList(res.data.result);
        };

        getData();
    }, [month]);

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
                    {monthOptions.map((v, i) => {
                        return (
                            <>
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name="month"
                                        checked={month === v}
                                        value={v}
                                        onChange={(e) => {
                                            setMonth(e.target.value);
                                            console.log(e.target.value);
                                        }}
                                    />
                                    <span className="round button">{v}</span>
                                </label>
                            </>
                        );
                    })}
                </div>
                <div className="order-list-container">
                    <OrderListGroup orderList={orderList} />
                </div>
            </motion.div>
        </>
    );
};

export default OrderList;
