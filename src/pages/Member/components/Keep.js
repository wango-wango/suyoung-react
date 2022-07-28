import React from "react";
import { Link } from "react-router-dom";
import "../styles/member-keep.scss";
import { motion } from "framer-motion";
import KeepCard from "./keepCard";

const Keep = () => {
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
                        <KeepCard />
                        <KeepCard />
                        <KeepCard />
                        <KeepCard />
                    </div>
                </motion.div>
            </>
        </>
    );
};

export default Keep;
