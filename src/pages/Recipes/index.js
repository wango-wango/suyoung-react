import React, { useState, useEffect } from "react";
import { useBackground } from "../../utils/useBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/autoplay_styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../styles/global.scss";
import "./styles/index.scss";

//import flexing_card
import "./styles/Expanding_flex_cards.css";

function Index(props) {
    const [recipes, setRecipes] = useState([])
    const [Next, setNext] = useState([])
    const [tryDisplay, setTryDisplay] = useState([])
    const [allFilter, setAllFilter] = useState([])
    // 來自useBackground 的設定
    const { setBackground } = useBackground();
    // 進入該頁設定背景
    useEffect(() => {
        setBackground("bg_1.svg");
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3700/recipes/api/get').then((response) => {
            setRecipes(response.data);
            const tryFilter = response.data.filter((v, i) => {
                return v.Classification === food
            })
            setTryDisplay(tryFilter.filter((v, i) => {
                return i < 6
            }))
            // 淺層複製 變成6筆+全部 共2個資料
            // if (response.data.length > 6) {
            //     const minus = response.data.length - 6;
            //     const sixArray = [...response.data];
            //     for (let i = 0; i < minus; i++) {
            //         sixArray.pop();
            //     }
            //     setSeafood(sixArray)
            // } else {
            //     setSeafood(response.data);
            // }
        })
    }, []);

    // .for(let t = 0; t < 6; t++){

    //     <div className="menu_content mt-3 w-75 text-white border-bottom border-white border-2">
    //         <Link to={`/shuyoung/recipes/recipesPage2/${v.sid}`} >
    //             {v.res_name}
    //         </Link>
    //     </div>
    //data送資料到front,[]只會跑一次
    console.log("recipes:", recipes)

    const [food, setFood] = useState('山珍野味')


    function one() {
        const tryFilter = recipes.filter((v, i) => {
            return v.Classification === '大海滋味'
        })
        setAllFilter(tryFilter)
        setTryDisplay(tryFilter.filter((v, i) => {
            return i < 6
        }))
    }
    function two() {
        const tryFilter = recipes.filter((v, i) => {
            return v.Classification === '山珍野味'
        })
        setAllFilter(tryFilter)
        setTryDisplay(tryFilter.filter((v, i) => {
            return i < 6
        }))
    }
    function three() {
        const tryFilter = recipes.filter((v, i) => {
            return v.Classification === '創意料理'
        })
        setAllFilter(tryFilter)
        setTryDisplay(tryFilter.filter((v, i) => {
            return i < 6
        }))
    }
    function next() {
        setTryDisplay(allFilter.filter((v, i) => {
            return i > 5
        }))
    }

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
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper carousel_size"
                        >
                            <SwiperSlide><img src={"/recipes_img/pancake.svg"} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={"/recipes_img/sanFishRice.svg"} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={"/recipes_img/africaEgg.svg"} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section>
                <div className="j_container mt-3">
                    <h5 className="fw-bold title_color">搜尋食譜</h5>
                    <input type="text input_label input_style" />
                    <div className="glass mt-3 mb-3">
                        <div class="general-container">
                            <input class="radio" type="radio" name="card" id="card-1" checked />
                            <label class="content d-none d-md-block" for="card-1">
                            </label>
                            <input class="radio" type="radio" name="card" id="card-2" />
                            <label class="content d-none d-md-block" for="card-2">
                                <span class="icon">
                                    <i class="fas fa-cloud-rain"></i>
                                </span>
                                <h3 class="card-title">
                                    París, Paris, France
                                    <span class="subtitle">@lolaguti</span>
                                </h3>
                            </label>
                            <input class="radio" type="radio" name="card" id="card-3" />
                            <label class="content" for="card-3">
                                <span class="icon">
                                    <i class="fas fa-cloud-moon"></i>
                                </span>
                                <h3 class="card-title">
                                    La Joue du Loup, Le Dévoluy, France
                                    <span class="subtitle">@quentindrphotography</span>
                                </h3>
                            </label>
                            <input class="radio" type="radio" name="card" id="card-4" />
                            <label class="content" for="card-4">
                            </label>
                            <input class="radio" type="radio" name="card" id="card-5" />
                            <label class="content" for="card-5">
                            </label>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="j_container mt-5 pb-5">
                    <div className="glass menu">
                        <div className="d-flex justify-content-around p-3 p-md-5">
                            <div className="col-3 col-md-1 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button"
                                onClick={() => one()}><div>大海滋味</div></div>
                            <div className="col-3 col-md-1 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button"
                                onClick={() => two()}><div>山珍野味</div></div>
                            <div className="col-3 col-md-1 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button"
                                onClick={() => three()}><div>創意料理</div></div>
                        </div>
                        <div className="d-md-flex align-items-end w-100 m-auto">
                            <div className="col-9 border-1 mt-3 mb-3 pb-3 pb-md-0 m-auto row justify-content-center">
                                {!!recipes && recipes.length ? tryDisplay
                                    .map((v, i) => {
                                        return (
                                            <React.Fragment key={v.sid}>
                                                <div className={i % 2 === 0 ? "ms-5" : "me-5"}>
                                                    <div className="menu_content mt-3 w-75 text-white border-bottom border-white border-2">
                                                        <Link to={`/shuyoung/recipes/recipesPage2/${v.sid}`} >
                                                            {v.res_name}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        );
                                    }) : null}
                                {/* <div className="menu_content mt-3 me-5 w-75 text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 ms-5 w-75  text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 me-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 ms-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 me-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div>
                                <div className="menu_content mt-3 ms-5 w-75   text-white border-bottom border-white border-2">牛油果雞蛋醃肉三文治</div> */}
                            </div>
                            <div className="col-md-2">
                                {/* <div onClick={()=> next()}>8987898789798789</div> */}
                                <div className="col-3 m-auto m-sm-0 col-md-6 rounded-pill d-flex align-items-center justify-content-center btn_bgc_color  text-center text-white mb-3 next_button" onClick={() => next()}>Next...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
