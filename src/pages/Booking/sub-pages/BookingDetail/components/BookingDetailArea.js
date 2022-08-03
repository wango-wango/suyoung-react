import React from "react";

function BookingDetailArea(props) {
    return (
        <>
            <div class="booking_detail_area">
                <div class="booking_date_title">
                    <p>入住日期</p>
                </div>
                <div class="booking_date_in input_group">
                    <input type="date" />
                    <label for="">Date</label>
                </div>
                <div class="booking_date_title">
                    <p>離開日期</p>
                </div>
                <div class="booking_date_out input_group">
                    <input type="date" />
                    <label for="">Date</label>
                </div>
                <div class="booking_date_title">
                    <p>入住人數</p>
                </div>
                <div class="booking_person input_group">
                    <input type="text" />
                    <label for="">Num</label>
                </div>
            </div>
            <div class="room_Result">
                <div class="room_title">
                    <h4>頂級星空帳</h4>
                </div>
                <div class="room_result_type">
                    <div class="room_modify">
                        <div class="room_modify_name">
                            <p>房間數量</p>
                        </div>
                        <div class="modify_unit">
                            <p>
                                <span>1</span>間
                            </p>
                        </div>
                    </div>
                    <div class="room_price">
                        <div class="room_price_name">
                            <p>
                                TWD. <span>16800</span>
                            </p>
                        </div>
                        <div class="room_num">
                            <p>
                                <span>2</span>晚
                            </p>
                        </div>
                    </div>
                    <div class="room_add_bed">
                        <div class="add_bed_name">
                            <p>加床(TWD.100)</p>
                        </div>
                        <div class="add_bed_num">
                            <p>
                                <span>2</span>床
                            </p>
                        </div>
                    </div>
                    <div class="room_result_total">
                        <p>total:</p>
                        <h5>33600</h5>
                    </div>
                    <div class="room_card_button_area">
                        <button class="room_card_button">button</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingDetailArea;
