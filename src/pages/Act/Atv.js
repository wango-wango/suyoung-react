import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/act.scss";
import { useBackground } from "../../utils/useBackground";
function Atv(props) {
    const { setBackground } = useBackground();

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
    return (
        <>
        <section>
        <div id="bg">
            <img src="/act_imgs/atv_bg5.svg" id="5" alt=""/>
            <img src="/act_imgs/atv_bg4.svg" id="4" alt=""/>
            <img src="/act_imgs/atv_bg3.svg" id="3" alt=""/>
            <img src="/act_imgs/atv_bg2.svg" id="2" alt=""/>
            <img src="/act_imgs/atv_bg1.svg" id="1" alt=""/>
        </div>
    </section>
        </>
    )
}

export default Atv;