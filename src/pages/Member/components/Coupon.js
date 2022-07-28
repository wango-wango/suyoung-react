import React from "react";
import "../styles/member-coupon.scss";
import { motion } from "framer-motion";

const Coupon = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="member-body"
            >
                <div className="coupon-container">
                    <div className="title">我的優惠券</div>
                    <div className="coupon-box">
                        <div className="left">
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div>
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                            <div className="coupon">
                                <span>獵人帳房型打85折</span>
                                <span>使用期限:</span>
                                <div className="date">
                                    <span className="start-date">
                                        2022-07-15
                                    </span>
                                    -
                                    <span className="expire-date">
                                        2022-09-02
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Coupon;
