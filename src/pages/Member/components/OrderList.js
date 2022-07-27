import React from "react";
import "../styles/member-order-list.scss";

const OrderList = () => {
    return (
        <>
            <div className="member-body">
                <div className="keep-title">訂單記錄</div>
                <div className="checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="one-month"
                            value="one-month"
                        />
                        <span className="round button">一個月內</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="three-month"
                            value="three-month"
                        />
                        <span className="round button">三個月內</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="six-month"
                            value="six-month"
                        />
                        <span className="round button">六個月內</span>
                    </label>
                </div>
                <div className="order-list-container">
                    <div className="order-list-group">
                        <div className="order-list-toggle">
                            <div className="img">
                                <img
                                    src="./src/room-type/beauty/roomA 2.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <div className="top">狩獵帳（已完成）</div>
                                <div className="bottom">
                                    2022 年 3 月 18 日 - 2022 年 3 月 19 日
                                </div>
                            </div>
                        </div>
                        <div className="order-list">
                            <div className="left">
                                <img
                                    src="./src/room-type/beauty/roomA 2.jpeg"
                                    alt=""
                                />
                                <div className="temp-name">狩獵帳</div>
                                <div className="temp-amount">
                                    帳數:<span>2</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="right-top">
                                    <div className="check-in-time">
                                        <div>入住時間:</div>
                                        <div>
                                            <span>6</span>月<span>25</span>日
                                        </div>
                                    </div>
                                    <div className="check-out-time">
                                        <div>退房時間:</div>
                                        <div>
                                            <span>6</span>月<span>27</span>日
                                        </div>
                                    </div>
                                    <div className="check-in-member">
                                        <div>入住人數:</div>
                                        <div className="wrap">
                                            <div>
                                                <span>4</span>位大人
                                            </div>

                                            <div>
                                                <span>1</span>位小孩
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-bottom">
                                    <div className="check">
                                        <i className="fa-regular fa-rectangle-list"></i>
                                        <div>價格</div>
                                    </div>
                                    <div className="night">
                                        <div>
                                            狩獵帳 * <span>2</span>晚
                                        </div>
                                        <div>
                                            <span>8,500</span>元
                                        </div>
                                    </div>
                                    <div className="plus">
                                        <div>
                                            活動加購：
                                            <span>夜遊觀星月</span>*
                                            <span>4</span>人
                                        </div>
                                        <div>
                                            <span>3,200</span>元
                                        </div>
                                    </div>
                                    <div className="plus">
                                        <div>
                                            活動加購：
                                            <span>沙灘車</span>*<span>4</span>人
                                        </div>
                                        <div>
                                            <span>3,200</span>元
                                        </div>
                                    </div>
                                    <div className="total-price">
                                        <div className="btn">
                                            <a href="#">點我看地圖</a>
                                        </div>
                                        <div className="btn">
                                            <a href="#">點我看房型介紹</a>
                                        </div>
                                        <div>
                                            <span>11,700</span>元
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-list-group">
                        <div className="order-list-toggle">
                            <div className="img">
                                <img
                                    src="./src/room-type/beauty/roomA 2.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <div className="top">狩獵帳（已完成）</div>
                                <div className="bottom">
                                    2022 年 3 月 18 日 - 2022 年 3 月 19 日
                                </div>
                            </div>
                        </div>
                        <div className="order-list">
                            <div className="left">
                                <img
                                    src="./src/room-type/beauty/roomA 2.jpeg"
                                    alt=""
                                />
                                <div className="temp-name">狩獵帳</div>
                                <div className="temp-amount">
                                    帳數:<span>2</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="right-top">
                                    <div className="check-in-time">
                                        <div>入住時間:</div>
                                        <div>
                                            <span>6</span>月<span>25</span>日
                                        </div>
                                    </div>
                                    <div className="check-out-time">
                                        <div>退房時間:</div>
                                        <div>
                                            <span>6</span>月<span>27</span>日
                                        </div>
                                    </div>
                                    <div className="check-in-member">
                                        <div>入住人數:</div>
                                        <div className="wrap">
                                            <div>
                                                <span>4</span>位大人
                                            </div>

                                            <div>
                                                <span>1</span>位小孩
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-bottom">
                                    <div className="check">
                                        <i className="fa-regular fa-rectangle-list"></i>
                                        <div>價格</div>
                                    </div>
                                    <div className="night">
                                        <div>
                                            狩獵帳 * <span>2</span>晚
                                        </div>
                                        <div>
                                            <span>8,500</span>元
                                        </div>
                                    </div>
                                    <div className="plus">
                                        <div>
                                            活動加購：
                                            <span>夜遊觀星月</span>*
                                            <span>4</span>人
                                        </div>
                                        <div>
                                            <span>3,200</span>元
                                        </div>
                                    </div>
                                    <div className="total-price">
                                        <div className="btn">
                                            <a href="#">點我看地圖</a>
                                        </div>
                                        <div className="btn">
                                            <a href="#">點我看房型介紹</a>
                                        </div>
                                        <div>
                                            <span>11,700</span>元
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;
