import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../styles/global.scss";
import "../styles/index.scss";

import pancakeImg from "../img/pancake.png";
import sanwanImg from "../img/sanFishRice.png";
import eggImg from "../img/africaEgg.png";


function Index(props) {
    return (
        <>
            <header className="d-flex justify-content-around">
                <h4 className="text-center fw-bold title_color">天菜大廚</h4>
            </header>
            <section>
                <div className="j_container">
                    <h5 className="fw-bold title_color">點閱率搜尋</h5>
                    <div className="d-flex align-items-center">
                        <div className="rounded-circle hot rs_button"></div>
                        <div className="col-md-3 col-4  range_slider rounded-pill"></div>
                    </div>
                    <div className="glass mt-3 pb-3 ">
                        <div id="carouselExampleIndicators" className="carousel slide pt-3 carousel_size" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <img src={"/recipes_img/pancake.png"} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={"/recipes_img/sanFishRice.png"} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={"/recipes_img/africaEgg.png"} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="j_container mt-3">
                    <h5 className="fw-bold title_color">搜尋食譜</h5>
                    <input type="text input_label input_style" />
                        <div className="glass mt-3 mb-3">
                            <div className="row flexing_card justify-content-between pt-3 pb-3">
                                <div className="col-3 hot"></div>
                                <div className="col-3 hot"></div>
                                <div className="col-3 hot"></div>
                            </div>
                        </div>
                </div>
            </section>
            <section>
                <div className="j_container mt-5 pb-5">
                    <div className="glass menu">
                        <div className="d-flex justify-content-around p-3 p-md-5">
                            <div className="col-3 col-md-1 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button"><div>大海滋味</div></div>
                            <div className="col-3 col-md-1 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button"><div>山珍野味</div></div>
                            <div className="col-3 col-md-1 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button"><div>創意料理</div></div>
                        </div>
                        <div className="d-md-flex align-items-end w-100 m-auto">
                            <div className="col-9 border-1 mt-3 mb-3 pb-3 pb-md-0 m-auto row justify-content-center">
                                <div className="menu_content mt-3 me-5 w-75 text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 ms-5 w-75  text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 me-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 ms-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 me-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 ms-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                            </div>
                            <div className="col-md-2">
                                <div className="col-3 m-auto m-sm-0 col-md-6 rounded-pill d-flex align-items-center justify-content-center btn_bgc_color  text-center text-white mb-3 next_button">Next...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
