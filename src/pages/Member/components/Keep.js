import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/member-keep.scss";
import { motion } from "framer-motion";
import { useAuth } from "../../Login/sub-pages/AuthProvider";
import KeepCard from "./keepCard";
import axios from "axios";


const Keep = () => {
    const { setAuth, ...auth } = useAuth();

    const [favlist, setFavlist] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `http://localhost:3700/member/favlist/${auth.m_id}`
            );

            const favlist = res.data;

            setFavlist(favlist);
        };

        getData();
    }, [favlist]);

    return (
        <>
            <>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="member-body"
                >
                    <div className="keep-title">收藏清單</div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="room-type"
                                value="房型"
                            />
                            <span className="round button">房型</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="activity-type"
                                value="活動"
                            />
                            <span className="round button">活動</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="recipe-type"
                                value="食譜"
                            />
                            <span className="round button">食譜</span>
                        </label>
                    </div>
                    <div className="keep-card-container">
                        <KeepCard favlist={favlist} />
                    </div>
                </motion.div>
            </>
        </>
    );
};

export default Keep;
