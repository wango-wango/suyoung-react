import React, { useState, useEffect } from "react";
import Axios from "axios";
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
import { ACT_GET_LIST } from "./config/ajax-path";
import { Link } from "react-router-dom";


function Float(props) {
    const { setBackground } = useBackground();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [actFloat, setActFloat] = useState([]);

    // // 用get 取得所有的值
    useEffect(()=>{
        Axios.get(
            `${ACT_GET_LIST}/selectAct`
        ).then((response) => {
            setActFloat(response.data.actFloat);
        });        
    },[]);

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
    useEffect(() => {
        if(!actFloat.length) return

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
    }, [actFloat]);


    if (actFloat.length === 0)
    return <></>;
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
                                <h3>Rafting Adventure</h3>
                            </div>
                            <div className="actChTitle">
                                <h4>{actFloat[0].act_name}</h4>
                            </div>
                            <Link to="/shuyoung/act/actreservation"><button className="btn btn-dark">預約報名</button></Link>
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
                                {actFloat.map((av, ai) => {
                                    return (
                                        <SwiperSlide key={ai}>
                                        <img src={"/act_imgs/"+ av.filename} alt=""/>
                                        </SwiperSlide>
                                    )
                                })};

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
                                {actFloat.map((av, ai) => {
                                    return (
                                        <SwiperSlide key={ai}>
                                        <img src={"/act_imgs/"+ av.filename} alt=""/>
                                        </SwiperSlide>
                                    )
                                })};
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
                                        {actFloat[0].act_desc}
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
                                    <div className="top"><h5><i className="fas fa-comment-dollar mr-2"></i>活動收費</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                    <div className="textspace">
                                    每人 {actFloat[0].act_price} 元，行程約 3 小時，歡迎 5~65 歲的大小朋友預約報名唷！<br/>
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
                                    <div className="top"><h5><i className="fas fa-calendar-check mr-2"></i>活動行程</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                    <div className="textspace">
                                        {actFloat[0].act_schedule}
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
                                        <div className="top"><h5><i className="fas fa-binoculars mr-2"/>個人準備物品</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                        <div className="textspace">
                                            {actFloat[0].act_prepare}
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
                                        <div className="top"><h5>注意事項</h5></div>
                                    </div>
                                </div>
                                <div className="actC">
                                    <div className="actDetail">
                                        <div className="textspace">
                                            {actFloat[0].act_notice}
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

export default Float;