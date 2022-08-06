import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/act.scss";
import { useBackground } from "../../utils/useBackground";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FontAwesomeIcon }from "fontawesome";

function Atv(props) {
    const { setBackground } = useBackground();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
        useEffect(() => {
            let groups = gsap.utils.toArray(".actGroup");
            let toggles = gsap.utils.toArray(".actToggle");
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
                let menu = element.querySelector(".actToggle");
                let box = element.querySelector(".actDetail");
    
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
            {/* <section>
                <div id="bg">
                    <img src="/act_imgs/atv_bg5.svg" id="5" alt=""/>
                    <img src="/act_imgs/atv_bg4.svg" id="4" alt=""/>
                    <img src="/act_imgs/atv_bg3.svg" id="3" alt=""/>
                    <img src="/act_imgs/atv_bg2.svg" id="2" alt=""/>
                    <img src="/act_imgs/atv_bg1.svg" id="1" alt=""/>
                </div>
            </section> */}
            <section>
                <div className="emf">
                    <div className="card_bg">
                        <div className="d-flex align-items-center titleGroup">
                            <div className="actEnTitle">
                                <h3>ATV</h3>
                            </div>
                            <div className="actChTitle">
                                <h4>全地形沙灘車</h4>
                            </div>
                            <button className="btn btn-dark">預約報名</button>
                        </div>
                        <div className="slider">
                            <Swiper
                        style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                        >
                                <SwiperSlide>
                                    <img src="/act_imgs/atv01.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv02.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv03.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv04.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv05.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={5}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/act_imgs/atv01.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv02.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv03.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv04.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/act_imgs/atv05.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="actDetailTitle"><h4>活動詳情</h4></div>
                        <div className="actContentCotainer">
                            <motion.div
                                className="actGroup"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.5,
                                    default: { ease: "linear" },
                                }}
                            >
                                <div className="actToggle">
                                    <div className="actTitle">
                                        <div className="top"><h5><i className="fa-solid fa-person-hiking mr-2"/>活動介紹</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                    <div className="textspace">
                                        1. 輕鬆自在：
                                            利用溪水漂流的方式，一覽南澳獨特山水景色，並享受沁涼
                                            溪水的小旅行。<br/>
                                        2. 老少咸宜：
                                            在漂流行程中，除可讓小孩子學習獨立自主的行為態度，更
                                            能有效促進親子關係唷！
                                        </div>
                                    </div>
                                </div>
                                </motion.div>
                                <motion.div
                                className="actGroup"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.5,
                                    default: { ease: "linear" },
                                }}
                            >
                                <div className="actToggle">
                                    <div className="actTitle">
                                        <div className="top"><h5><i class="fas fa-comment-dollar mr-2"></i>活動收費</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                    <div className="textspace">
                                    每人 1,000 元，行程約 3 小時，歡迎 5~65 歲的大小朋友預約報名唷！<br/>
                                    活動費用含專業帶團教練
                                    </div>
                                    </div>
                                </div>
                                </motion.div>
                                <motion.div
                                className="actGroup"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.5,
                                    default: { ease: "linear" },
                                }}
                            >
                                <div className="actToggle">
                                    <div className="actTitle">
                                        <div className="top"><h5><i class="fas fa-calendar-check mr-2"></i>活動行程</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                    <div className="textspace">
                                        上午團<br/>
                                        09:00 那山那谷休閒農場集合<br/>
                                        09:30 出發換裝、行前講解、暖身<br/>
                                        10:00 開始漂流，沿途體驗沁涼溪水、激流冒險、團隊互助、壯闊山景！<br/>
                                        12:00 返回那山那谷休閒農場洗澡換裝<br/>
                                        <br/>
                                        下午團<br/>
                                        13:00 那山那谷休閒農場集合<br/>
                                        13:30 出發換裝、行前講解、暖身<br/>
                                        14:00 開始漂流，沿途體驗沁涼溪水、激流冒險、團隊互助、壯闊山景！<br/>
                                        16:00 返回那山那谷休閒農場洗澡換裝<br/>
                                    </div>
                                    </div>
                                </div>
                                </motion.div>
                                <motion.div
                                className="actGroup"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.5,
                                    default: { ease: "linear" },
                                }}
                            >
                                <div className="actToggle">
                                    <div className="actTitle">
                                        <div className="top"><h5><i class="fas fa-binoculars mr-2"/>個人準備物品</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                    <div className="textspace">
                                    1. 活動當天著泳裝或輕便服裝下水（請勿穿牛仔褲）。<br/>
                                    2. 活動當天會提供溯溪鞋，為了換裝方便，建議自行攜帶拖
                                    鞋或涼鞋。<br/>
                                    3. 個人飲水。<br/>
                                    4. 個人毛巾、塑膠袋（當天放置車上即可）。<br/>
                                    5. 有戴眼鏡的朋友，請加掛眼鏡帶，以防被溪水沖掉。<br/>
                                    6. 使用隱形眼鏡的朋友，請多帶一副一般眼鏡以下水備用。<br/>
                                    7. 活動前請先修剪指甲，長指甲於活動時易斷裂。<br/>
                                    8. 我們會準備防水相機為大家拍照，但若您也想要自行攜帶
                                    防水相機也可以，但務    必要注意固定方式，因為相機在溪
                                    裡的遺失率很高。<br/>
                                    9. 手機、錢包、鑰匙、手錶、項鍊、戒指在溪中容易損壞且
                                    遺失，請務必放置自己車上，其他貴重物品也請勿帶下
                                    水，如不慎掉落溪中，教練會盡力協尋，但恕無法保證能
                                    找回。<br/>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Atv;