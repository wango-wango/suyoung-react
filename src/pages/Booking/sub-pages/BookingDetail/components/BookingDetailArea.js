import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBookingList } from "../../../../../utils/useBookingList";
import { BK_GET_LIST } from "../../../config/ajax-path";
import Axios from "axios";


function BookingDetailArea(props) {
    const { roomList,localRoomList } = props;
    const { bookingList, setBookingList } = useBookingList();
    
    const [room, setRoom] = useState({});

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const td = String(tomorrow.getDate()).padStart(2, "0");
    const tm = String(tomorrow.getMonth() + 1).padStart(2, "0"); //January is 0!
    const tyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    tomorrow = tyyy + "-" + tm + "-" + td;

    const postRoomData = async() => {
        await Axios.post(`${BK_GET_LIST}/temporaryCart`, localRoomList);
    }

    useEffect(()=>{
        setRoom(JSON.parse(localStorage.getItem("room"))) ;

    },[]);



    if (roomList.length === 0) return <></>;

    // setBookingList({...bookingList,totalPrice: total});

    return (
        <>
            <div className="booking_detail_area">
                <div className="booking_date_title">
                    <p>入住日期</p>
                </div>
                <div className="booking_date_in input_group">
                    <input
                        type="text"
                        readOnly
                        placeholder={room.startDate || today}
                    />
                    <label htmlFor="">Date</label>
                </div>
                <div className="booking_date_title">
                    <p>離開日期</p>
                </div>
                <div className="booking_date_out input_group">
                    <input
                        type="text"
                        readOnly
                        placeholder={room.endDate || tomorrow}
                    />
                    <label htmlFor="">Date</label>
                </div>
                <div className="booking_date_title">
                    <p>入住人數</p>
                </div>
                <div className="booking_person input_group">
                    <input
                        type="text"
                        readOnly
                        placeholder={
                            room.adults +
                            " 位大人 ｜ " +
                            room.kids +
                            " 位小孩"
                        }
                    />
                    <label htmlFor="">Num</label>
                </div>
            </div>
            <div className="room_Result">
                <div className="room_title">
                    <h4>{roomList[0].room_name}</h4>
                </div>
                <div className="room_result_type">
                    <div className="room_modify">
                        <div className="room_modify_name">
                            <p>房間數量</p>
                        </div>
                        <div className="modify_unit">
                            <p>
                                <span>1</span> 間
                            </p>
                        </div>
                    </div>
                    <div className="room_price">
                        <div className="room_price_name">
                            <p>
                                TWD. <span>{roomList[0].room_price}</span>
                            </p>
                        </div>
                        <div className="room_num">
                            <p>
                                <span>{room.perNight}</span> 晚
                            </p>
                        </div>
                    </div>
                    <div className="room_add_bed">
                        <div className="add_bed_name">
                            <p>加床(TWD.200)</p>
                        </div>
                        <div className="add_bed_num">
                            <p>
                                <span>{room.kids || 0}</span> 床
                            </p>
                        </div>
                    </div>
                    <div className="room_result_total">
                        <p>total:</p>
                        <h5>{bookingList.totalPrice || room.totalPrice}</h5>
                    </div>
                    <div className="room_card_button_area">
                        <Link to="/shuyoung/Booking">
                            <button
                                className="room_card_button"
                                onClick={() => {
                                    setBookingList({
                                        ...bookingList,
                                        roomSid: "",
                                        adults: "",
                                        kids: "",
                                        startDate: "",
                                        endDate: "",
                                        perNight: "",
                                        roomType: [],
                                        startPrice: "",
                                        endPrice: "",
                                        tagCheck: [],
                                        popular: "",
                                        recommend: "",
                                        roomSelector: [],
                                        totalPrice: "",
                                    });
                                    localStorage.removeItem("room");
                                }}
                            >
                                返回
                            </button>
                        </Link>
                        <button className="room_card_button" onClick={postRoomData}>加入購物車</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingDetailArea;
