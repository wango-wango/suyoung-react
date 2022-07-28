import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/act.scss";

function Night(props) {
    return (
        <>
        <section>
        <div id="bg">
            <img src="/act_imgs/night_bg6.svg" id="6" alt=""/>
            <img src="/act_imgs/night_bg5.svg" id="5" alt=""/>
            <img src="/act_imgs/night_bg4.svg" id="4" alt=""/>
            <img src="/act_imgs/night_bg3.svg" id="3" alt=""/>
            <img src="/act_imgs/night_bg2.svg" id="2" alt=""/>
            <img src="/act_imgs/night_bg1.svg" id="1" alt=""/>
        </div>
    </section>
        </>
    )
}

export default Night;