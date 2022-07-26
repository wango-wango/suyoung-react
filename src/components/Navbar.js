import React, { useState } from "react";
import "../styles/navbar.scss";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="left-logo">
                        <Link to="/shuyoung">
                            <img src="/member_img/logo.svg" alt="" />
                        </Link>
                    </div>
                    <div className="nav-li">
                        <ul className="left">
                            <li className="hover">
                                <Link to="/shuyoung/SuMap">地圖</Link>
                            </li>
                            <li className="hover">
                                <Link to="/shuyoung/recipes">舒營食譜</Link>
                            </li>
                            <li className="hover">
                                <Link to="/shuyoung/Act">活動導覽</Link>
                            </li>
                            <li className="hover">
                                <Link to="/shuyoung/Booking">預約訂位</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-icon">
                        <div className="login">
                            <Link to="/shuyoung/Login">
                                <FaUserCircle
                                    className="iconLogin"
                                    size="30px"
                                />
                            </Link>
                        </div>
                        <div className="cart">
                            <Link
                                to="/shuyoung/Cart"
                                className={isActive ? "active" : null}
                            >
                                <FaShoppingCart
                                    className="iconCart"
                                    size="30px"
                                />
                            </Link>
                        </div>

                        <button
                            className="hamburger"
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <div></div>
                        </button>
                    </div>
                    <ul className={isActive ? "nav-links open" : "nav-links"}>
                        <li className={isActive ? "fade" : null}>
                            <a href="#/">
                                <img src="/member_img/logo.svg" alt="" />
                            </a>
                        </li>
                        <li className={isActive ? "fade" : null}>
                            <Link to="/shuyoung">首頁</Link>
                        </li>
                        <li className={isActive ? "fade" : null}>
                            <Link to="/shuyoung/SuMap">地圖</Link>
                        </li>
                        <li className={isActive ? "fade" : null}>
                            <Link to="/shuyoung/Recipes">舒營食譜</Link>
                        </li>
                        <li className={isActive ? "fade" : null}>
                            <Link to="/shuyoung/Act">活動導覽</Link>
                        </li>
                        <li className={isActive ? "fade" : null}>
                            <Link to="/shuyoung/Booking">預約訂位</Link>
                        </li>
                        <li className={isActive ? "fade" : null}>
                            <Link to="/shuyoung/Login" className="login-button">
                                登入/註冊
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
