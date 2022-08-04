import React, { useEffect } from "react";
import BookingArea from "./components/BookingArea";
import BookingCard from "./components/BookingCard";
import BookingFilter from "./components/BookingFilter";
import "./styles/index.scss";
import { useBackground } from "../../utils/useBackground";

function Index(props) {
    const { setBackground } = useBackground();

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);

    return (
        <>
            <section className="Booking">
                <div className="Booking_container">
                    <BookingArea />
                    <div className="room_area_flex">
                        <BookingFilter />
                        <BookingCard />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
