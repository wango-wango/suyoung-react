import { useState, useContext, createContext } from "react";

// 專門拿來存商品的
const BookingCartContext = createContext(null);

export const BookingCartProvider = ({ children }) => {
    // background 預設背景圖狀態
    const [bookingCart, setBookingCart] = useState([]);

    return (
        // 傳送整個房型資訊
        <BookingCartContext.Provider value={{ bookingCart, setBookingCart }}>
            {children}
        </BookingCartContext.Provider>
    );
};

export const useBookingCart = () => useContext(BookingCartContext);
