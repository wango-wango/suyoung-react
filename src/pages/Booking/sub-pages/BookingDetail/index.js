import React, { useEffect, useState } from "react";
import RoomCard from "./components/RoomCard";
import RoomEquipment from "./components/RoomEquipment";
import BookingDetailArea from "./components/BookingDetailArea";
import "./style/style.scss";
import { useBackground } from "../../../../utils/useBackground";
import DetailPictures from "./components/DetailPictures";
import DetailParagraph from "./components/DetailParagraph";
import GuessYouLike from "./components/GuessYouLike";

import { BK_GET_LIST } from "../../config/ajax-path";
import Axios from "axios";
import { useBookingList } from "../../../../utils/useBookingList";
import { useBookingCart } from "../../../../utils/useBookingCart";

function Index(props) {
    // 來自useBackground 的設定
    const { setBackground } = useBackground();
    // 進入該頁設定背景
    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
    // useContext 把房間的Sid 帶過來
    const { bookingList } = useBookingList();
    const { bookingCart, setBookingCart } = useBookingCart();

    // 接住來自後端的資料
    const [tagList, setTagList] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const [picList, setPicList] = useState([]);
    const [eqiList, setEqiList] = useState([]);
    const [otherRoomList, setOtherRoomList] = useState([]);
    const [ruleList, setRuleList] = useState([]);

    // 專門存來自bookingList 和 後端傳回來的roomList
    const [localRoomList, setlocalRoomList] = useState([]);

    // 用get 取得所有的值
    const getData = () => {
        // 用 queryString 把 roomSid 傳給後端
        Axios.get(
            `${BK_GET_LIST}/selectRoom?roomSid=${bookingList.roomSid}&personNum=${bookingList.adults}`
        ).then((response) => {
            setRoomList(response.data.roomDetail);
            setTagList(response.data.tagList);
            setPicList(response.data.picList);
            setEqiList(response.data.eqiList);
            setOtherRoomList(response.data.otherRoomList);
            setRuleList(response.data.ruleList);
            console.log(response.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (roomList.length >= 1)
            setlocalRoomList({ ...bookingList, ...roomList[0] });
    }, [roomList]);

    // 當 localRoomList 有值存進去後
    // 把新的localRoomList 存進去 bookingCart 裡面
    // 也同步存入 localStorage
    useEffect(() => {
        console.log(bookingCart.length);

        let newArray = [];
        if (bookingCart.length >= 2) {
            newArray = [...bookingCart, localRoomList];
        }else{
            newArray = [localRoomList];
        }

        setBookingCart(newArray);
        localStorage.setItem("roomItem", JSON.stringify(newArray));
    }, [localRoomList]);

    return (
        <>
            <section className="room_order_detail">
                <div className="room_order_container">
                    <div className="room_Rows">
                        <div className="room_col_left">
                            <RoomCard
                                roomList={roomList}
                                tagList={tagList}
                                picList={picList}
                            />
                            <RoomEquipment eqiList={eqiList} />
                        </div>
                        <div className="room_col_right">
                            <BookingDetailArea roomList={roomList} />
                        </div>
                    </div>
                </div>
                <div id="scrolldown">
                    <a>
                        <span></span>Scroll
                    </a>
                </div>
            </section>
            <section className="room_detail_up">
                <div className="detail_up_title">
                    <h1>GSAP Scroll</h1>
                </div>
                <DetailPictures picList={picList} />
            </section>
            <section className="room_detail_down">
                <DetailParagraph ruleList={ruleList} />
            </section>
            <section className="guess_you_like">
                <GuessYouLike otherRoomList={otherRoomList} />
            </section>
        </>
    );
}

export default Index;
