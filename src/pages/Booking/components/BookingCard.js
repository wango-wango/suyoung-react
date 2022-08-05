import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BK_GET_LIST } from "../config/ajax-path";
import { useBookingList } from "../../../utils/useBookingList";
import { useAuth } from "../../Login/sub-pages/AuthProvider";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function BookingCard(props) {
    // 所有room 列表
    const [roomList, setRoomList] = useState([]);
    // 所有Tag 列表
    const [tagList, setTagList] = useState([]);
    // 會員的 favList roomsid
    const [favList, setFavList] = useState([]);

    // useContext
    const { bookingList, setBookingList } = useBookingList();
    const { setAuth, ...auth } = useAuth();

    // 準備傳到後端的資料
    const [memberKeep, setMemberKeep] = useState({
        roomSid: "",
        memberId: "",
        favType: 1,
    });

    // 判斷是否回傳值給 memberKeep
    const keepHandler = (e) => {
        const checked = e.target.checked;
        const roomSid = e.target.value;
        const memberId = auth.sid;

        if (checked) {
            setMemberKeep({
                ...memberKeep,
                roomSid: roomSid,
                memberId: memberId,
            });
            setFavList([...favList, +roomSid]);
        } else {
            deleteKeep(roomSid);
        }
    };

    // 如果 keep 是 unchecked 刪除該筆資料
    const deleteKeep = async (sid) => {
        const room_sid = sid;
        const oldFavList = favList;
        const newFavList = oldFavList.filter((v) => v !== +sid);
        setFavList(newFavList);
        const res = await Axios.delete(
            `${BK_GET_LIST}/deleteKeep?memberId=${auth.sid}&roomSid=${room_sid}`
        );
        console.log(res);
    };

    /*
        roomSid: "",
        adults: "",
        kids: "",
        startDate: "",
        endDate: "",
        perNignt: "",
        roomType: [],
        startPrice: "",
        endPrice: "",
        tagCheck: [],
        popular: "",
        recommand: "",
    */
    // 用get 取得所有的值
    const getData = async () => {
        await Axios.get(`${BK_GET_LIST}/selectRoom`).then((response) => {
            setRoomList(response.data.roomList);
            setTagList(response.data.tagList);
            console.log(response.data.roomList);
            console.log(auth.sid);
        });

        // 取得所有favlist 的 roomSid
        await Axios.get(`${BK_GET_LIST}/favlist?memberId=${auth.sid}`).then(
            (response) => {
                // setFavList(response.data);
                setFavList(response.data.map((v) => +v.fav_list_kind));
            }
        );
    };

    // const getFavList = async
    const postData = async () => {
        await Axios.post(`${BK_GET_LIST}/addKeep`, memberKeep);
    };

    // 起始狀態先render getData
    useEffect(() => {
        getData();
    }, []);

    // 當memberKeep改變才執行
    useEffect(() => {
        if (memberKeep.memberId !== "" && memberKeep.roomSid !== "") {
            postData();
        }
    }, [memberKeep]);

    return (
        <>
            <div className="room_card_flex">
                {roomList &&
                    roomList.map((v, i) => {
                        return (
                            <div className="room_card_area" key={v.sid}>
                                <div className="room_card_img_area">
                                    <div className="room_card_img">
                                        <img
                                            src={
                                                "/room_imgs/" +
                                                v.room_folder +
                                                "/" +
                                                v.room_image
                                            }
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="room_card_content">
                                    <div className="room_card_title">
                                        <h4>{v.room_name}</h4>
                                    </div>
                                    <div className="room_card_subtitle">
                                        <h5>
                                            {v.person_num}人房{" "}
                                            {v.person_num / 2}
                                            張雙人床
                                        </h5>
                                    </div>
                                    <div className="room_card_tag">
                                        {tagList.map((t, ti) => {
                                            return v.sid === t.sid ? (
                                                <div
                                                    className="room_card_tag_btn"
                                                    key={ti}
                                                >
                                                    <span className="text">
                                                        {t.type}
                                                    </span>
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                    <div className="room_card_Price">
                                        <p>TWD:</p>
                                        <h4>{v.room_price}</h4>
                                        <p>晚</p>
                                    </div>
                                    <div className="room_card_button_area">
                                        <div className="room_card_btn_area">
                                            <Link to="/shuyoung/Booking/BookingDetail">
                                                <button
                                                    className="room_card_button"
                                                    onClick={() => {
                                                        setBookingList({
                                                            ...bookingList,
                                                            roomSid: v.sid,
                                                        });
                                                    }}
                                                >
                                                    <span>點我訂房</span>
                                                </button>
                                            </Link>
                                        </div>

                                        <div className="keep_button">
                                            <input
                                                className="checkbox-tools"
                                                type="checkbox"
                                                name="keep"
                                                id={"keepBtn" + i}
                                                value={v.sid}
                                                onClick={keepHandler}

                                                // favList.includes(v.sid) ===
                                                //     true
                                                //         ? true
                                                //         : false
                                            />
                                            <label
                                                className="for-checkbox-tools"
                                                htmlFor={"keepBtn" + i}
                                            >
                                                {favList.includes(v.sid) ? (
                                                    <AiFillHeart className="fillHeart" />
                                                ) : (
                                                    <AiOutlineHeart className="outlineHeart" />
                                                )}
                                                {/* <AiOutlineHeart className="outlineHeart" />
                                                <AiFillHeart className="fillHeart" /> */}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            {/* <div>Rendered at {dimensions.width}</div> */}
        </>
    );
}

export default BookingCard;
