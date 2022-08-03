import React, { useState, useContext, useEffect } from "react";
import "../styles/navbar.scss";
import axios from "axios";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import AuthContext from "../pages/Login/sub-pages/AuthContext";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const [userData, setUserData] = useState({});

    const { setAuth, sid, login, logout, ...auth } = useContext(AuthContext);

    console.log(auth);

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
                        {auth.authorized ? (
                            <>
                                <div className="login">
                                    <Link to="/shuyoung">
                                        <FiLogOut
                                            className="iconLogin"
                                            size="30px"
                                            onClick={() => {
                                                logout();
                                            }}
                                        />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="login">
                                    <Link to="/shuyoung/Join">
                                        <FaUserCircle
                                            className="iconLogin"
                                            size="30px"
                                        />
                                    </Link>
                                </div>
                            </>
                        )}

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

                        {auth.authorized ? (
                            <>
                                <li className={isActive ? "fade" : null}>
                                    <Link
                                        to="/shuyoung/Login"
                                        className="login-button"
                                        onClick={() => {
                                            logout();
                                        }}
                                    >
                                        登出
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className={isActive ? "fade" : null}>
                                    <Link
                                        to="/shuyoung/Login"
                                        className="login-button"
                                    >
                                        登入/註冊
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}
