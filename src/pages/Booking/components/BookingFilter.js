import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { BK_GET_LIST } from "../config/ajax-path";
import { useBookingList } from "../../../utils/useBookingList";

import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";
function BookingFilter(props) {
    //所有標籤列表 從node 取出來的
    const [tagList, setTagList] = useState([]);

    // 房型確認狀態
    const [checkroomType, setCheckRoomType] = useState([]);
    const { bookingList, setBookingList } = useBookingList();

    // 價格slider的值
    const [value, setValue] = useState([1000, 5000]);

    // tag 狀態
    const [tagValue, setTagValue] = useState([]);

    // RoomType 控制器
    const RoomTypeHandler = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            // 拷貝並存進去新的value
            const newRoomType = [...bookingList.roomType, value];
            //存回去roomType
            setBookingList({
                ...bookingList,
                roomType: newRoomType,
            });
            setCheckRoomType([...checkroomType, value]);
        } else {
            // 拷貝
            const oldRoomType = bookingList.roomType;
            // 篩選掉不要的
            const newRoomType = oldRoomType.filter((v) => {
                return v !== value;
            });
            // 存回去TagCheck
            setBookingList({
                ...bookingList,
                roomType: newRoomType,
            });
            const oldCheckRoomType = checkroomType;
            const newChekRoomType = oldCheckRoomType.filter((v) => {
                return v !== value;
            });
            setCheckRoomType(newChekRoomType);
        }
    };

    // 掌控每一個tag 判斷 true 存進去 false 移除
    const tagHandler = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            // 拷貝並存進去新的value
            const newTagCheck = [...bookingList.tagCheck, value];
            //存回去TagCheck
            setBookingList({
                ...bookingList,
                tagCheck: newTagCheck,
            });
            setTagValue([...tagValue, value]);
        } else {
            // 拷貝
            const oldTagCheck = bookingList.tagCheck;
            // 篩選掉不要的
            const newTagCheck = oldTagCheck.filter((v) => {
                return v !== value;
            });
            // 存回去TagCheck
            setBookingList({
                ...bookingList,
                tagCheck: newTagCheck,
            });
            const oldTagValue = tagValue;
            const newTagValue = oldTagValue.filter((v) => {
                return v !== value;
            });
            setTagValue(newTagValue);
        }
    };
    // 用get 取得所有的值
    const getTagData = () => {
        Axios.get(`${BK_GET_LIST}/selectTag`).then((response) => {
            setTagList(response.data);
            console.log(response.data);
        });
    };

    useEffect(() => {
        getTagData();
    }, []);
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
                            value={"beauty"}
                            onClick={RoomTypeHandler}
                        />
                        <label className="for-checkbox-tools" htmlFor="tool-1">
                            <i className="fa-solid fa-campground"></i>
                            頂級網美
                        </label>
                        <input
                            className="checkbox-tools"
                            type="checkbox"
                            name="tools"
                            id="tool-2"
                            value={"family"}
                            onClick={RoomTypeHandler}
                        />
                        <label className="for-checkbox-tools" htmlFor="tool-2">
                            <i className="fa-solid fa-tents"></i>
                            溫馨親子
                        </label>
                        <input
                            className="checkbox-tools"
                            type="checkbox"
                            name="tools"
                            id="tool-3"
                            value={"van"}
                            onClick={RoomTypeHandler}
                        />
                        <label className="for-checkbox-tools" htmlFor="tool-3">
                            <i className="fa-solid fa-caravan"></i>
                            高級露營車
                        </label>
                        <input
                            className="checkbox-tools"
                            type="checkbox"
                            name="tools"
                            id="tool-4"
                            value={"camp"}
                            onClick={RoomTypeHandler}
                        />
                        <label className="for-checkbox-tools" htmlFor="tool-4">
                            <i className="fa-solid fa-person-hiking"></i>
                            不求人露營
                        </label>
                    </div>
                </div>
                <div className="room_filter_price">
                    <div className="room_title room_price_title">價格</div>
                    <Row>
                        <Col md={20}>
                            <RangeSlider
                                progress
                                max={20000}
                                value={value}
                                onChange={(value) => {
                                    setValue(value);
                                    setBookingList({
                                        ...bookingList,
                                        startPrice: value[0],
                                        endPrice: value[1],
                                    });
                                }}
                            />
                        </Col>
                        <Col md={20} style={{ marginTop: 16 }}>
                            <InputGroup>
                                <InputNumber
                                    min={0}
                                    max={20000}
                                    value={value[0]}
                                    onChange={(nextValue) => {
                                        const [start, end] = value;
                                        if (nextValue > end) {
                                            return;
                                        }
                                        setValue([nextValue, end]);
                                        setBookingList({
                                            ...bookingList,
                                            startPrice: nextValue,
                                        });
                                    }}
                                />
                                <InputGroup.Addon>to</InputGroup.Addon>
                                <InputNumber
                                    min={0}
                                    max={20000}
                                    value={value[1]}
                                    onChange={(nextValue) => {
                                        const [start, end] = value;
                                        if (start > nextValue) {
                                            return;
                                        }
                                        setValue([start, nextValue]);
                                        setBookingList({
                                            ...bookingList,
                                            endPrice: nextValue,
                                        });
                                    }}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
                <div className="room_filter_tag">
                    <div className="room_title roomTag_title">標籤</div>
                    <div className="room_tag_area">
                        {tagList.map((t, ti) => {
                            return (
                                <Fragment key={ti}>
                                    <input
                                        className="checkbox-booking"
                                        type="checkbox"
                                        name="booking"
                                        id={"booking-" + (ti + 1)}
                                        value={t.type}
                                        onChange={tagHandler}
                                    />
                                    <label
                                        className="for-checkbox-booking"
                                        htmlFor={"booking-" + (ti + 1)}
                                    >
                                        <span className="text">{t.type}</span>
                                    </label>
                                </Fragment>
                            );
                        })}
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
                        <label
                            className="for-checkbox-people"
                            htmlFor="people-1"
                        >
                            <span className="text">popular</span>
                        </label>
                        <input
                            className="checkbox-people"
                            type="checkbox"
                            name="people"
                            id="people-2"
                        />
                        <label
                            className="for-checkbox-people"
                            htmlFor="people-2"
                        >
                            <span className="text">recommand</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingFilter;
