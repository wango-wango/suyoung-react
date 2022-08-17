import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BK_GET_LIST } from "../config/ajax-path";
import { useBookingList } from "../../../utils/useBookingList";
import { useAuth } from "../../Login/sub-pages/AuthProvider";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Swal from "sweetalert2";

function BookingCard(props) {
    const {roomList,setRoomList, tagList, favList, setFavList,searchName} = props;
    // 篩選控制器重置
    const { setSearchName, setCheckRoomType, setRoomSelector, setValue, setTagValue, setRecommend, setPopular, setSearchContext} = props;
    // useContext
    const { bookingList, setBookingList } = useBookingList();
    const { setAuth, ...auth } = useAuth();

    // 準備傳到後端的資料
    const [memberKeep, setMemberKeep] = useState({
        roomSid: "",
        memberId: "",
        favType: 1,
    });

    // 控制 收藏功能
    const keepHandler = (e) => {
        const checked = e.target.checked;
        const roomSid = e.target.value;
        const memberId = auth.m_id;

        if (checked) {
            // 先存一個新的
            const newMemberKeep = {...memberKeep,roomSid: roomSid,
                memberId: memberId};
            // 存進資料庫
            postKeep(newMemberKeep);
            // 存進狀態
            setMemberKeep(newMemberKeep);
            setFavList([...favList, +roomSid]);
        } else {
            // 刪除資料
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
            `${BK_GET_LIST}/deleteKeep?memberId=${auth.m_id}&roomSid=${room_sid}`
        );
        console.log(res);
    };

    // 把會員收藏存進去資料庫
    const postKeep = async (newMemberKeep) => {
        await Axios.post(`${BK_GET_LIST}/addKeep`, newMemberKeep);
    };   


    // useEffect(() => {
    // const oldRoomList = roomList;
    // const newRoomList = oldRoomList.filter((v)=>v.room_name.includes(searchName));
    // setRoomList(newRoomList);
    // }, [searchName])

    
    
    // /* 篩選全部重置 */
    const resetAll = () => {
        setBookingList({
            roomSid: "",
            adults: "",
            kids: "0",
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
            roomTotalPrice:"",
            nextDate:"",
            orderType: "1",
        });
        
        // 所有狀態歸零
        setCheckRoomType([]);
        setRoomSelector([]);
        setValue([1000, 5000]);
        setTagValue([]);
        setPopular(1);
        setRecommend(1);
        setSearchName("");
        setSearchContext("");
    }
    
    return (
        <>
            <div className="room_card_flex">
                {roomList && roomList.length ? (
                    roomList.filter((v)=>v.room_name.includes(searchName)).map((v, i) => {
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
                                            <Link
                                                to={
                                                    bookingList &&
                                                    bookingList.startDate &&
                                                    bookingList.endDate &&
                                                    bookingList.adults
                                                        ? "/shuyoung/Booking/BookingDetail"
                                                        : "/shuyoung/Booking"
                                                }
                                            >
                                                <button
                                                    className="room_card_button"
                                                    onClick={() => {

                                                        if (
                                                            bookingList &&
                                                            bookingList.startDate &&
                                                            bookingList.endDate &&
                                                            bookingList.adults
                                                        ) {
                                                            const newBookingList =
                                                                {
                                                                    ...bookingList,
                                                                    roomSid:
                                                                        v.sid,
                                                                    adults: bookingList.adults,
                                                                    kids: bookingList.kids,
                                                                };
                                                            setBookingList(
                                                                newBookingList
                                                            );

                                                            localStorage.setItem(
                                                                "room",
                                                                JSON.stringify(
                                                                    newBookingList
                                                                )
                                                            );
                                                        } else {
                                                            Swal.fire({
                                                                icon: "error",
                                                                title: "輸入資料有誤",
                                                                text: "請輸入訂房日期及人數!",
                                                                color: "#224040",
                                                                background:
                                                                    "#FFF",
                                                                confirmButtonColor:
                                                                    "#224040",
                                                            });
                                                        }
                                                    }}
                                                >
                                                    <span>點我訂房</span>
                                                </button>
                                            </Link>
                                        </div>

                                        <div className="keep_button">
                                            {auth.authorized || auth.success ? (
                                                <input
                                                    className="checkbox-tools"
                                                    type="checkbox"
                                                    name="keep"
                                                    id={"keepBtn" + i}
                                                    value={v.sid}
                                                    onClick={keepHandler}
                                                />
                                            ) : (
                                                <input
                                                    className="checkbox-tools"
                                                    type="checkbox"
                                                    name="keep"
                                                    id={"keepBtn" + i}
                                                    value={v.sid}
                                                    onClick={() => {
                                                        Swal.fire({
                                                            icon: "error",
                                                            title: "未登入會員",
                                                            text: "請先登入會員",
                                                            color: "#224040",
                                                            background: "#fff",
                                                            confirmButtonColor:
                                                                "#224040",
                                                        });
                                                    }}
                                                />
                                            )}
                                            
                                            <label
                                                className="for-checkbox-tools"
                                                htmlFor={"keepBtn" + i}
                                            >
                                                {favList.includes(v.sid) ? (
                                                    <AiFillHeart className="fillHeart" />
                                                ) : (
                                                    <AiOutlineHeart className="outlineHeart" />
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })):(null)}
            </div>
        </>
    );
}

export default BookingCard;
