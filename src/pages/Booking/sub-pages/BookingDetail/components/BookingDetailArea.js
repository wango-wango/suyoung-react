import React, { useState, useEffect } from "react";

function BookingDetailArea(props) {
    const { roomList } = props;
    console.log(roomList);

    if (roomList.length === 0) return <></>;

    return (
        <>
            <div className="booking_detail_area">
                <div className="booking_date_title">
                    <p>入住日期</p>
                </div>
                <div className="booking_date_in input_group">
                    <input type="date" />
                    <label htmlFor="">Date</label>
                </div>
                <div className="booking_date_title">
                    <p>離開日期</p>
                </div>
                <div className="booking_date_out input_group">
                    <input type="date" />
                    <label htmlFor="">Date</label>
                </div>
                <div className="booking_date_title">
                    <p>入住人數</p>
                </div>
                <div className="booking_person input_group">
                    <input type="text" />
                    <label htmlFor="">Num</label>
                </div>
            </div>
            <div className="room_Result">
                <div className="room_title">
                    {/* <h4>{roomList[0].room_name}</h4> */}
                </div>
                <div className="room_result_type">
                    <div className="room_modify">
                        <div className="room_modify_name">
                            <p>房間數量</p>
                        </div>
                        <div className="modify_unit">
                            <p>
                                <span>1</span>間
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
                                <span>2</span>晚
                            </p>
                        </div>
                    </div>
                    <div className="room_add_bed">
                        <div className="add_bed_name">
                            <p>加床(TWD.100)</p>
                        </div>
                        <div className="add_bed_num">
                            <p>
                                <span>2</span>床
                            </p>
                        </div>
                    </div>
                    <div className="room_result_total">
                        <p>total:</p>
                        <h5>{roomList[0].room_price * 2}</h5>
                    </div>
                    <div className="room_card_button_area">
                        <button className="room_card_button">button</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingDetailArea;
