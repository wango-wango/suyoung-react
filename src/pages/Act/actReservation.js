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

function ActReser(props) {
    const { setBackground } = useBackground();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    useEffect(() => {
        setBackground("bg1.svg");
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
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default ActReser;