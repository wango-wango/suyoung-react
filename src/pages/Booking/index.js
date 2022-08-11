import React, { useEffect } from "react";
import BookingArea from "./components/BookingArea";
import BookingCard from "./components/BookingCard";
import BookingFilter from "./components/BookingFilter";
import "./styles/index.scss";
import { useBackground } from "../../utils/useBackground";
import { useSpinner } from "../../useSpinner";

// import { formatInTimeZone } from 'date-fns-tz';

function Index(props) {
    // const date = new Date();
    // console.log(date);
    // console.log(formatInTimeZone(date, 'Asia/Taipei', 'yyyy-MM-dd HH:mm:ss zzz'));


    const { setBackground } = useBackground();
    const { spinner, setLoading } = useSpinner(4000);

    // useEffect(() => {
    //     setLoading(true);
    // }, [setLoading]);

    useEffect(() => {
        setBackground("bg1.svg");
    }, []);

    return (
        <>
            {spinner}
            <section className="Booking">
                <div className="Booking_container">
                    <div className="booking_area_container">
                        <BookingArea />
                    </div>

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
