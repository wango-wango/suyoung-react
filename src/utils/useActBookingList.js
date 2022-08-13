import { useState, useContext, createContext } from "react";

const ActBookingContext = createContext(null);

export const ActBookingProvider = ({ children }) => {
    // background 預設背景圖狀態
    const [actBookingList, setActBookingList] = useState({
        actSid: "",
        actName:"",
        people: "",
        Maxpeople: "",
        Date: "",
        Price: "",
        totalPrice:"",
    });

    return (
        // 傳送整個房型資訊
        <ActBookingContext.Provider value={{ actBookingList, setActBookingList }}>
            {children}
        </ActBookingContext.Provider>
    );
};

export const useActBookingList = () => useContext(ActBookingContext);
