import React, { useState, useContext, useEffect } from "react";
import "../styles/navbar.scss";
import { useActBookingList } from "../utils/useActBookingList";
import { useAuth } from "../pages/Login/sub-pages/AuthProvider";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useBookingCart } from "../utils/useBookingCart";
import Axios from "axios";
import {BK_GET_LIST} from "../pages/Booking/config/ajax-path"





export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const { actBookingList, setActBookingList } = useActBookingList();
    const { setAuth, ...auth } = useAuth();
    const { bookingCart, setBookingCart } = useBookingCart();
    const { authorized, logout } = useAuth();
    const [totalCount, setTotalCount] = useState(0);
    

    

    const getMemberCart = async() => {
       
            await Axios.get(`${BK_GET_LIST}/selectMemberCart?memberId=${auth.m_id}`).then(
                (response) => {
                    // setFavList(response.data);
                    setBookingCart(response.data);
                }
            );

    }

    useEffect(() => {
        if(auth.authorized || auth.success){
            getMemberCart();
        }
        if(!auth.authorized){
            // setBookingCart([]);
            setTotalCount(0);
        }
    }, [auth])

    useEffect(() => {
      if(totalCount === 0) setBookingCart([])
    }, [totalCount])
    

    useEffect(() => {
        if(bookingCart.length || actBookingList.actCount)
        setTotalCount(bookingCart.length + actBookingList.actCount);
        // console.log(bookingCart.length + actBookingList.actCount);
    }, [bookingCart,actBookingList])


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
                                    <li className="dropdown_item-1">
                                    <Link to="/shuyoung/act/upstream" onClick={()=>{
                                        setActBookingList({...actBookingList,actSid:3})
                                    }}>親子溯溪</Link></li>
                                    <li className="dropdown_item-2" onClick={()=>{
                                        setActBookingList({...actBookingList,actSid:1})
                                    }}><Link to="/shuyoung/act/float">漂流探險</Link></li>
                                    <li className="dropdown_item-3" onClick={()=>{
                                        setActBookingList({...actBookingList,actSid:8})
                                    }}><Link to="/shuyoung/act/night">夜遊觀星</Link></li>
                                    <li className="dropdown_item-4" onClick={()=>{
                                        setActBookingList({...actBookingList,actSid:5})
                                    }}><Link to="/shuyoung/act/atv">全地形車</Link></li>
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
                        
                            {authorized ? (
                                <div className="hover-list">
                                    <ul>
                                        <li
                                            
                                        >
                                            <Link to="/shuyoung/member">
                                                前往會員中心
                                            </Link>
                                        </li>
                                        <li
                                            onClick={() => {
                                                    logout();
                                                }}
                                        >
                                            登出
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                              null
                            )}
                        

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
                                {totalCount > 0 ? (<div className="CartCount"><p>{totalCount}</p></div>):null}
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
                                {totalCount > 0 ? (<div className="CartCount"><p>{totalCount}</p></div>):null}

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
