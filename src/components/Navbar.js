import React, { useState, useContext, useEffect } from "react";
import "../styles/navbar.scss";

import { useAuth } from "../pages/Login/sub-pages/AuthProvider";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const { authorized, logout } = useAuth();

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
                        <ul className="left menu">
                            <li className="hover">
                                <Link to="/shuyoung/SuMap">地圖</Link>
                            </li>
                            <li className="hover">
                                <Link to="/shuyoung/recipes">舒營食譜</Link>
                            </li>
                            <li className="hover dropdown dropdown-2">
                                活動導覽
                                <ul className="dropdown_menu dropdown_menu--animated dropdown_menu-2">
                                    <li className="dropdown_item-1"><Link to="/shuyoung/act/upstream">親子溯溪</Link></li>
                                    <li className="dropdown_item-2"><Link to="/shuyoung/act/float">漂流探險</Link></li>
                                    <li className="dropdown_item-3"><Link to="/shuyoung/act/night">夜遊觀星</Link></li>
                                    <li className="dropdown_item-4"><Link to="/shuyoung/act/atv">全地形車</Link></li>
                                </ul>
                            </li>
                            <li className="hover">
                                <Link to="/shuyoung/Booking">預約訂位</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-icon">
                        {authorized ? (
                            <>
                                <div className="login">
                                    <Link className="auth" to="/shuyoung">
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
                                    <Link className="auth" to="/shuyoung/Join">
                                        <FaUserCircle
                                            className="iconLogin"
                                            size="30px"
                                        />
                                    </Link>
                                </div>
                            </>
                        )}
                        <div className="hover-list">
                            {authorized ? (
                                <ul>
                                    <li
                                        
                                    >
                                        <Link to="/shuyoung/member">
                                            前往會員中心
                                        </Link>
                                    </li>
                                    <li
                                        
                                    >
                                        登出
                                    </li>
                                </ul>
                            ) : (
                                <ul>
                                    <li
                                       
                                    >
                                        <Link to="/shuyoung/join/register">
                                            註冊會員
                                        </Link>
                                    </li>
                                    <li
                                        
                                    >
                                        <Link to="/shuyoung/join">登入</Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {isActive ? (<div
                            className="cart"
                            onClick={() => {
                                setIsActive(!isActive);
                            }}>
                            <Link
                                to="/shuyoung/Cart"
                                className={isActive ? " auth active" : "auth"}
                            >
                                <FaShoppingCart
                                    className="iconCart"
                                    size="30px"
                                />
                            </Link>
                        </div>):(
                            <div
                            className="cart">
                            <Link
                                to="/shuyoung/Cart"
                                className={isActive ? " auth active" : "auth"}
                            >
                                <FaShoppingCart
                                    className="iconCart"
                                    size="30px"
                                />
                            </Link>
                        </div>
                        )}
                        

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
                        <li
                            className={isActive ? "fade" : null}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <Link to="/shuyoung">
                                <img src="/member_img/logo.svg" alt="" />
                            </Link>
                        </li>
                        <li
                            className={isActive ? "fade" : null}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <Link to="/shuyoung">首頁</Link>
                        </li>
                        <li
                            className={isActive ? "fade" : null}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <Link to="/shuyoung/SuMap">地圖</Link>
                        </li>
                        <li
                            className={isActive ? "fade" : null}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <Link to="/shuyoung/Recipes">舒營食譜</Link>
                        </li>
                        <li
                            className={isActive ? "fade" : null}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <Link to="/shuyoung/Act">活動導覽</Link>
                        </li>
                        <li
                            className={isActive ? "fade" : null}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <Link to="/shuyoung/Booking">預約訂位</Link>
                        </li>

                        {authorized ? (
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
                                <li
                                    className={isActive ? "fade" : null}
                                    onClick={() => {
                                        setIsActive(!isActive);
                                    }}
                                >
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
