import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/act.scss";
import { useBackground } from "../../utils/useBackground";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Calendar, Whisper, Popover, Badge } from 'rsuite';



function ActReser(props) {
    const { setBackground } = useBackground();

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
    
        return (
        <>
            
            <section>
                <div className="emf">
                    <div className="card_bg">
                        <div className="actEnTitle">
                            <h3>ATV</h3>
                        </div>
                        <div className="calendar">
                            <Calendar/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ActReser;