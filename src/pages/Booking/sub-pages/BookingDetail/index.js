import React from "react";
import RoomCard from "./components/RoomCard";
import RoomEquipment from "./components/RoomEquipment";
import BookingDetailArea from "./components/BookingDetailArea";
import "./style/style.scss";

function Index(props) {
    return (
        <>
            <section className="room_order_detail">
                <div class="room_order_container">
                    <div class="room_Rows">
                        <div class="room_col_left">
                            <RoomCard />
                            <RoomEquipment />
                        </div>
                        <div class="room_col_right">
                            <BookingDetailArea />
                        </div>
                    </div>
                </div>
                <div id="scrolldown">
                    <a href=".room_detail_up">
                        <span></span>Scroll
                    </a>
                </div>
            </section>
            <section className="room_detail_up"></section>
            <section className="room_detail_down"></section>
            <section className="guess_you_like"></section>
        </>
    );
}

export default Index;
