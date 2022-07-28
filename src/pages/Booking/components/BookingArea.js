import React from "react";

function BookingArea(props) {
    return (
        <>
            <div className="booking_area">
                <div className="booking_date input_group">
                    <input type="date" required />
                    <label>日期</label>
                </div>
                <div className="booking_person input_group">
                    <input type="text" required />
                    <label>人數</label>
                </div>
                <div className="booking_result">
                    <div className="booking_result_date">
                        <p>
                            2022/08/26 ~ 2022/08/29 (<span>2</span> 晚)
                        </p>
                    </div>
                    <div className="booking_result_PersonNum">
                        <p>
                            <span>2</span> 位成人 | <span>2</span>位小孩
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingArea;
