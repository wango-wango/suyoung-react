import React from "react";
import { Link } from "react-router-dom";
import "../styles/member-keep.scss";

const Keep = () => {
    return (
        <>
            <>
                <div className="member-body">
                    <div className="keep-title">收藏清單</div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="room-type"
                                value="房型"
                            />
                            <span className="round button">房型</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="activity-type"
                                value="活動"
                            />
                            <span className="round button">活動</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="recipe-type"
                                value="食譜"
                            />
                            <span className="round button">食譜</span>
                        </label>
                    </div>
                    <div className="keep-card-container">
                        <div className="keep-card">
                            <div className="keep-card-img">
                                <img
                                    src="./src/baikang-yuan-VDYAsdbHVhc-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="keep-card-title">房型1</div>
                            <div className="keep-card-content">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Adipisci, voluptatum voluptas.
                                Quo consequatur culpa tempore corporis quisquam.
                                Facere ea sint tenetur qui odit magnam ex
                                ducimus laboriosam blanditiis. Totam, eos.
                            </div>
                            <div className="keep-card-button">
                                <Link to="/">看更多</Link>
                            </div>
                        </div>
                        <div className="keep-card">
                            <div className="keep-card-img">
                                <img
                                    src="./src/baikang-yuan-VDYAsdbHVhc-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="keep-card-title">房型1</div>
                            <div className="keep-card-content">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Adipisci, voluptatum voluptas.
                                Quo consequatur culpa tempore corporis quisquam.
                                Facere ea sint tenetur qui odit magnam ex
                                ducimus laboriosam blanditiis. Totam, eos.
                            </div>
                            <div className="keep-card-button">
                                <Link to="/">看更多</Link>
                            </div>
                        </div>
                        <div className="keep-card">
                            <div className="keep-card-img">
                                <img
                                    src="./src/baikang-yuan-VDYAsdbHVhc-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="keep-card-title">房型1</div>
                            <div className="keep-card-content">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Adipisci, voluptatum voluptas.
                                Quo consequatur culpa tempore corporis quisquam.
                                Facere ea sint tenetur qui odit magnam ex
                                ducimus laboriosam blanditiis. Totam, eos.
                            </div>
                            <div className="keep-card-button">
                                <Link to="/">看更多</Link>
                            </div>
                        </div>
                        <div className="keep-card">
                            <div className="keep-card-img">
                                <img
                                    src="./src/baikang-yuan-VDYAsdbHVhc-unsplash.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="keep-card-title">房型1</div>
                            <div className="keep-card-content">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Adipisci, voluptatum voluptas.
                                Quo consequatur culpa tempore corporis quisquam.
                                Facere ea sint tenetur qui odit magnam ex
                                ducimus laboriosam blanditiis. Totam, eos.
                            </div>
                            <div className="keep-card-button">
                                <Link to="/">看更多</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default Keep;
