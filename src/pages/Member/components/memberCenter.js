import { React, useEffect, useState } from "react";
import "../styles/member-center.scss";
import { useContext } from "react";
import AuthContext from "../../Login/sub-pages/AuthContext";

import MemberCenterCenter from "./MemberCenterCenter";
import Coupon from "./Coupon";
import Info from "./Info";
import Keep from "./Keep";
import OrderList from "./OrderList";
import Password from "./Password";
import MemberLevel from "./MemberLevel";
import CreditCard from "./CreditCard";

import { useSpinner } from "../../../useSpinner";

import { MemberInfo } from "../../Login/sub-pages/MemberProvider";

import { gsap } from "gsap";
import anime from "animejs";

import { Link } from "react-router-dom";
import axios from "axios";

const MemberCenter = () => {
    const [step, setStep] = useState(0);

    const { sid, ...auth } = useContext(AuthContext);

    const { memberData, setMemberData } = MemberInfo();

    // console.log(auth);

    // const [fields, setFields] = useState({});

    const { spinner, setLoading } = useSpinner(4000);

    useEffect(() => {
        setLoading(true);
    }, [setLoading]);

    // useEffect(() => {
    //     if (authorized === true) {
    //         console.log("getting user data");
    //         getUserData();
    //     }
    // }, [authorized]);

    const getUserData = async () => {
        // const memberId = JSON.parse(localStorage.getItem("auth")).sid;

        await axios.get(`http://localhost:3700/member/${sid}`).then((res) => {
            if (res) {
                console.log(res.data.user);
                setMemberData({ ...res.data.user });
            } else {
                alert("查無會員資料");
            }
        });

        // console.log(res);
    };

    useEffect(() => {
        if (auth.authorized === true) {
            getUserData();
        }
    }, []);

    //==============dark mode============

    useEffect(() => {
        const moonPath =
            "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
        const sunPath =
            "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
        const darkMode = document.querySelector("#dark_mode");

        let toggle = false;

        darkMode.addEventListener("click", () => {
            const timeline = anime.timeline({
                duration: 750,
                easing: "easeOutExpo",
            });

            timeline
                .add({
                    targets: ".moon",
                    d: [{ value: toggle ? moonPath : sunPath }], //moonPath ->sunpath
                })
                .add(
                    {
                        targets: "#dark_mode",
                        rotate: toggle ? 0 : 320,
                    },
                    "-=350"
                )
                .add(
                    {
                        targets: "",
                        backgroundColor: toggle
                            ? "rgba(255,255,255)"
                            : "rgba(22,22,22)",
                        color: toggle ? "rgba(22,22,22)" : "rgba(255,255,255)",
                    },
                    "-=700"
                );

            if (!toggle) {
                toggle = true;
            } else {
                toggle = false;
            }
        });
    }, []);

    //==============dark mode end============

    const Components = [
        MemberCenterCenter,
        Info,
        OrderList,
        Keep,
        Password,
        Coupon,
        MemberLevel,
        CreditCard,
    ];

    const BlockComponent = Components[step];

    function myFunction() {
        const day = document.querySelector(".member-center");

        day.classList.toggle("night");
        day.classList.toggle("day-light");

        day.style.transition = "all .5s ease";
    }

    return (
        <>
            {spinner}
            <section className="member-center member-center-center day-light">
                {/* <button
                    onClick={() => {
                        setLoading((pre) => !pre);
                    }}
                >
                    123
                </button> */}
                <button className="daylight" onClick={myFunction}>
                    <svg
                        id="dark_mode"
                        width="55"
                        height="55"
                        viewBox="0 0 55 55"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="moon"
                            d="M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z"
                            fill="#fee140"
                        />
                    </svg>
                </button>
                <div className="member-container">
                    <div className="member-head">
                        <div className="left">
                            <ul>
                                <li>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(0);
                                        }}
                                    >
                                        <img
                                            src="/member_img/PersonCircle.svg"
                                            alt=""
                                        />
                                        會員中心
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(2);
                                        }}
                                    >
                                        <img
                                            src="/member_img/CardList.svg"
                                            alt=""
                                        />
                                        訂單查詢
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(3);
                                        }}
                                    >
                                        <img
                                            src="/member_img/Vector.svg"
                                            alt=""
                                        />
                                        願望清單
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(1);
                                        }}
                                    >
                                        <img
                                            src="/member_img/diary.svg"
                                            alt=""
                                        />
                                        基本資料
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(6);
                                        }}
                                    >
                                        <img src={memberData.m_avatar} alt="" />
                                        {memberData.m_last_name}
                                        {memberData.m_first_name}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="member-flex-box">
                        <div className="sidebar">
                            <div className="side-wrapper">
                                <div className="side-title">會員</div>
                                <div className="side-menu">
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(1);
                                        }}
                                    >
                                        <img
                                            src="/member_img/my-account.svg"
                                            alt=""
                                        />
                                        基本資料
                                    </div>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(4);
                                        }}
                                    >
                                        <img
                                            src="/member_img/password-edit.svg"
                                            alt=""
                                        />
                                        修改密碼
                                    </div>
                                </div>
                            </div>
                            <div className="side-wrapper">
                                <div className="side-title">會員項目</div>
                                <div className="side-menu">
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(5);
                                        }}
                                    >
                                        <img
                                            src="/member_img/ticket-alt.svg"
                                            alt=""
                                        />
                                        我的優惠券
                                    </div>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(6);
                                        }}
                                    >
                                        <img
                                            src="/member_img/star-of-life.svg"
                                            alt=""
                                        />
                                        會員等級
                                    </div>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(7);
                                        }}
                                    >
                                        <img
                                            src="/member_img/credit-card.svg"
                                            alt=""
                                        />
                                        信用卡管理
                                    </div>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(2);
                                        }}
                                    >
                                        <img
                                            src="/member_img/CardList.svg"
                                            alt=""
                                        />
                                        訂單查詢
                                    </div>
                                    <div
                                        className="member-btn"
                                        onClick={() => {
                                            setStep(3);
                                        }}
                                    >
                                        <img
                                            src="/member_img/Vector.svg"
                                            alt=""
                                        />
                                        願望清單
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlockComponent member={memberData} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MemberCenter;
