import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberCenter from "./components/MemberCenter";
import MemberCenterCenter from "./components/MemberCenterCenter";

function Member(props) {
    return (
        <>
            <MemberCenter>
                <MemberCenterCenter />
            </MemberCenter>
        </>
    );
}

export default Member;
