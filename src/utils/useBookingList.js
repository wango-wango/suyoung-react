import { useState, useContext, createContext } from "react";

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
    // background 預設背景圖狀態
    const [bookingList, setBookingList] = useState({
        roomSid: "",
        adults: "",
        kids: "",
        startDate: "",
        endDate: "",
        perNignt: "",
        roomType: [],
        priceA: "",
        priceB: "",
        tagList: [],
    });

    return (
        // 傳送整個房型資訊
        <BookingContext.Provider value={{ bookingList, setBookingList }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBookingList = () => useContext(BookingContext);
