import React, { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const OrderListGroup = () => {
    useEffect(() => {
        let groups = gsap.utils.toArray(".order-list-group");
        let toggles = gsap.utils.toArray(".order-list-toggle");
        let listToggles = groups.map(createAnimation);

        toggles.forEach((toggle) => {
            toggle.addEventListener("click", function () {
                toggleMenu(toggle);
            });
        });

        function toggleMenu(clickedToggle) {
            listToggles.forEach((toggleFn) => toggleFn(clickedToggle));
        }
        function createAnimation(element) {
            let menu = element.querySelector(".order-list-toggle");
            let box = element.querySelector(".order-list");

            gsap.set(box, { height: "auto" });
            let animation = gsap
                .from(box, {
                    height: 0,
                    duration: 0.5,
                    ease: "power1.inOut",
                })
                .reverse();

            return function (clickedMenu) {
                if (clickedMenu === menu) {
                    animation.reversed(!animation.reversed());
                } else {
                    animation.reverse();
                }
            };
        }
    }, []);

    return (
        <>
            <motion.div
                className="order-list-group"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.5,
                    default: { ease: "linear" },
                }}
            >
                <div className="order-list-toggle">
                    <div className="img">
                        <img src="/room_imgs/beauty/roomA9.jpeg" alt="" />
                    </div>
                    <div className="text">
                        <div className="top">狩獵帳（已完成）</div>
                        <div className="bottom">
                            2022 年 3 月 18 日 - 2022 年 3 月 19 日
                        </div>
                    </div>
                </div>
                <div className="order-list">
                    <div className="left">
                        <img src="/room_imgs/beauty/roomA9.jpeg" alt="" />
                        <div className="temp-name">狩獵帳</div>
                        <div className="temp-amount">
                            帳數:<span>2</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-top">
                            <div className="check-in-time">
                                <div>入住時間:</div>
                                <div>
                                    <span>6</span>月<span>25</span>日
                                </div>
                            </div>
                            <div className="check-out-time">
                                <div>退房時間:</div>
                                <div>
                                    <span>6</span>月<span>27</span>日
                                </div>
                            </div>
                            <div className="check-in-member">
                                <div>入住人數:</div>
                                <div className="wrap">
                                    <div>
                                        <span>4</span>位大人
                                    </div>

                                    <div>
                                        <span>1</span>位小孩
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-bottom">
                            <div className="check">
                                <i className="fa-regular fa-rectangle-list"></i>
                                <div>價格</div>
                            </div>
                            <div className="night">
                                <div>
                                    狩獵帳 * <span>2</span>晚
                                </div>
                                <div>
                                    <span>8,500</span>元
                                </div>
                            </div>
                            <div className="plus">
                                <div>
                                    活動加購：
                                    <span>夜遊觀星月</span>*<span>4</span>人
                                </div>
                                <div>
                                    <span>3,200</span>元
                                </div>
                            </div>
                            <div className="plus">
                                <div>
                                    活動加購：
                                    <span>沙灘車</span>*<span>4</span>人
                                </div>
                                <div>
                                    <span>3,200</span>元
                                </div>
                            </div>
                            <div className="total-price">
                                <div className="checkmore-btn">
                                    <a href="#">點我看地圖</a>
                                </div>
                                <div className="checkmore-btn">
                                    <a href="#">點我看房型介紹</a>
                                </div>
                                <div>
                                    <span>11,700</span>元
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default OrderListGroup;
