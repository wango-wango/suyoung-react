import React from "react";

function BookingFilter(props) {
    return (
        <>
            <div className="room_filter_area">
                <div className="room_filter_btn">
                    <div className="room_btn_flex">
                        <div className="room_btn room_btn_type">房型</div>
                        <div className="room_btn room_btn_price">價格</div>
                        <div className="room_btn room_btn_tag">標籤</div>
                        <div className="room_btn room_btn_people">
                            大家怎麼說
                        </div>
                    </div>
                </div>
                <div className="room_filter_roomType">
                    <div className="room_title roomType_title">房型</div>
                    <div className="roomType_flex">
                        <input
                            className="checkbox-tools"
                            type="checkbox"
                            name="tools"
                            id="tool-1"
                            checked
                        />
                        <label className="for-checkbox-tools" for="tool-1">
                            <i className="fa-solid fa-campground"></i>
                            頂級網美
                        </label>
                        <input
                            className="checkbox-tools"
                            type="checkbox"
                            name="tools"
                            id="tool-2"
                        />
                        <label className="for-checkbox-tools" for="tool-2">
                            <i className="fa-solid fa-tents"></i>
                            溫馨親子
                        </label>
                        <input
                            className="checkbox-tools"
                            type="checkbox"
                            name="tools"
                            id="tool-3"
                        />
                        <label className="for-checkbox-tools" for="tool-3">
                            <i className="fa-solid fa-caravan"></i>
                            高級露營車
                        </label>
                        <input
                            className="checkbox-tools"
                            type="checkbox"
                            name="tools"
                            id="tool-4"
                        />
                        <label className="for-checkbox-tools" for="tool-4">
                            <i className="fa-solid fa-person-hiking"></i>
                            不求人露營
                        </label>
                    </div>
                </div>
                <div className="room_filter_price">
                    <div className="room_title room_price_title">價格</div>
                    <div className="range_container">
                        <div className="sliders_control">
                            <input
                                id="fromSlider"
                                type="range"
                                value="1000"
                                min="0"
                                max="20000"
                            />
                            <input
                                id="toSlider"
                                type="range"
                                value="5000"
                                min="0"
                                max="20000"
                            />
                        </div>
                        <div className="form_control">
                            <div className="form_control_container">
                                <div className="form_control_container__time">
                                    最低
                                </div>
                                <input
                                    className="form_control_container__time__input"
                                    type="number"
                                    id="fromInput"
                                    value="1000"
                                    min="0"
                                    max="20000"
                                />
                            </div>
                            <div className="form_control_container">
                                <div className="form_control_container__time">
                                    最高
                                </div>
                                <input
                                    className="form_control_container__time__input"
                                    type="number"
                                    id="toInput"
                                    value="5000"
                                    min="0"
                                    max="20000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="room_filter_tag">
                    <div className="room_title roomTag_title">標籤</div>
                    <div className="room_tag_area">
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-1"
                        />
                        <label className="for-checkbox-booking" for="booking-1">
                            <i className="uil uil-coffee mr-3"></i>
                            <span className="text">breakfast</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-2"
                        />
                        <label className="for-checkbox-booking" for="booking-2">
                            <i className="uil uil-restaurant mr-3"></i>
                            <span className="text">dinner</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-3"
                        />
                        <label className="for-checkbox-booking" for="booking-3">
                            <i className="uil uil-car-sideview mr-3"></i>
                            <span className="text">pick up</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-4"
                        />
                        <label className="for-checkbox-booking" for="booking-4">
                            <i className="uil uil-flower mr-3"></i>
                            <span className="text">garden</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-5"
                        />
                        <label className="for-checkbox-booking" for="booking-5">
                            <i className="uil uil-wifi mr-3"></i>
                            <span className="text">internet</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-6"
                        />
                        <label className="for-checkbox-booking" for="booking-6">
                            <i className="uil uil-parking-square mr-3"></i>
                            <span className="text">parking</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-7"
                        />
                        <label className="for-checkbox-booking" for="booking-7">
                            <i className="uil uil-tv-retro mr-3"></i>
                            <span className="text">television</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-8"
                        />
                        <label className="for-checkbox-booking" for="booking-8">
                            <i className="uil uil-books mr-3"></i>
                            <span className="text">books</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-9"
                        />
                        <label className="for-checkbox-booking" for="booking-9">
                            <i className="uil uil-kayak mr-3"></i>
                            <span className="text">kayak</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-10"
                        />
                        <label
                            className="for-checkbox-booking"
                            for="booking-10"
                        >
                            <i className="uil uil-glass-martini-alt mr-3"></i>
                            <span className="text">drink</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-11"
                        />
                        <label
                            className="for-checkbox-booking"
                            for="booking-11"
                        >
                            <i className="uil uil-dumbbell mr-3"></i>
                            <span className="text">gym</span>
                        </label>
                        <input
                            className="checkbox-booking"
                            type="checkbox"
                            name="booking"
                            id="booking-12"
                        />
                        <label
                            className="for-checkbox-booking"
                            for="booking-12"
                        >
                            <i className="uil uil-sign-alt mr-3"></i>
                            <span className="text">walking tours</span>
                        </label>
                    </div>
                </div>
                <div className="room_filter_people_say">
                    <div className="room_title roomPeople_title">
                        大家怎麼說
                    </div>

                    <div className="roomPeople_area">
                        <input
                            className="checkbox-people"
                            type="checkbox"
                            name="peopole"
                            id="people-1"
                        />
                        <label className="for-checkbox-people" for="people-1">
                            <i className="uil uil-coffee mr-3"></i>
                            <span className="text">popular</span>
                        </label>
                        <input
                            className="checkbox-people"
                            type="checkbox"
                            name="people"
                            id="people-2"
                        />
                        <label className="for-checkbox-people" for="people-2">
                            <i className="uil uil-restaurant mr-3"></i>
                            <span className="text">recommand</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingFilter;
