import React, { useState, useEffect } from "react";
import axios from "axios";
import { useBackground } from "../../utils/useBackground";

function Index(props) {
    const { setBackground } = useBackground();

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);

    return <div>Carts</div>;
}

export default Index;
