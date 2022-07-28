import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberCenter from "./components/MemberCenter";
import MemberCenterCenter from "./components/MemberCenterCenter";
import { useBackground } from "../../utils/useBackground";

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
        </>
    );
}

export default Member;
