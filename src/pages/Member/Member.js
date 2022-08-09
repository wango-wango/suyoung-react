import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberCenter from "./components/MemberCenter";
import MemberCenterCenter from "./components/MemberCenterCenter";
import { useBackground } from "../../utils/useBackground";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";

function Member(props) {
    const { setBackground } = useBackground();

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
    return (
        <>
            <MemberCenter>
                <MemberCenterCenter />
            </MemberCenter>
            <MouseParallaxContainer
                containerStyles={{
                    position: "absolute",
                    zIndex: "0",
                    bottom: "10%",
                    top: "auto",
                }}
            >
                <MouseParallaxChild
                    factorX={0.003}
                    factorY={0.003}
                    // updateStyles={{
                    //     background: "transparent",
                    //     backgroundPositionY: "50%",
                    //     transform: "scale(1.2)",
                    //     position: "absolute",
                    //     filter: "blur(4px) brightness(50%)",
                    //     backgroundSize: "auto",
                    //     backgroundRepeat: "repeat",
                    //     width: "100%",
                    //     height: "100%",
                    //     backfaceVisibility: "hidden",
                    // }}
                />

                <MouseParallaxChild factorX={0.018} factorY={0.018}>
                    <img
                        className="layer5"
                        src="/member_img/layer/layer5.svg"
                        alt=""
                    />
                </MouseParallaxChild>

                <MouseParallaxChild factorX={-0.018} factorY={-0.018}>
                    <img
                        className="layer4"
                        src="/member_img/layer/layer4.svg"
                        alt=""
                    />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.014} factorY={0.014}>
                    <img
                        className="layer3"
                        src="/member_img/layer/layer3.svg"
                        alt=""
                    />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={-0.016} factorY={0.016}>
                    <img
                        className="layer2"
                        src="/member_img/layer/layer2.svg"
                        alt=""
                    />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.018} factorY={-0.018}>
                    <img
                        className="layer1"
                        src="/member_img/layer/layer1.svg"
                        alt=""
                    />
                </MouseParallaxChild>
            </MouseParallaxContainer>

            <div className="animation-wrapper">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
            </div>
        </>
    );
}

export default Member;
