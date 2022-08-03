import React, { useEffect } from "react";
import MRegister from "./components/MRegister";
import { useBackground } from "../../utils/useBackground";

const Index = () => {
    const { setBackground } = useBackground();

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
    return (
        <>
            <MRegister />
        </>
    );
};

export default Index;
