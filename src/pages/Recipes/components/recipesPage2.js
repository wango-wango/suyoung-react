import React, { useState, useEffect } from "react";
import { useBackground } from "../../../utils/useBackground";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../styles/global.scss";
import "../styles/index.scss";


function RecipesPage2(props) {
    const [recipes, setRecipes] = useState([])
    const [tutorial, setTutorial] = useState([])
    //sid
    const { sid } = useParams()
    const pageSid = +sid
    //頁籤
    const [togglestate, setTogglestate] = useState(1)

    const toggleTab = (index) => {
        setTogglestate(index);
    }

    // 來自useBackground 的設定
    const { setBackground } = useBackground();
    // 進入該頁設定背景
    useEffect(() => {
        setBackground("bg_1.svg");
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3700/recipes/api/get').then((response) => {
            setRecipes(response.data);
        })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3700/recipes/api/tutorial').then((response) => {
            setTutorial(response.data);
            console.log('11', response.data)
        })
    }, []);

    return (
        <>
            <div>
                <header>
                    <h4 className="text-center fw-bold title_color menu_content">
                        <Link to={`/shuyoung/recipes`}>
                            天菜大廚
                        </Link>
                    </h4>
                </header>
                {/* const setRecipes ={...V , quanity:1 
                localStorage.setItem("recipes",JSON.stringtify(setRecipes)) */}
                <div>
                    {!!recipes && recipes.length ? recipes.filter((v, i) => {
                        return v.sid === pageSid
                    }).map((v, i) => {
                        return <>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                const setRecipes = { ...v, quanity: 1 };
                                localStorage.setItem("recipes", JSON.stringify(setRecipes))
                            }}>send storage</button>
                        </>
                    }) : null}
                </div>
                <section className="mb-5">
                    <div className="j_container">
                        {!!recipes && recipes.length ? recipes.filter((v, i) => {
                            return v.sid === pageSid
                        })
                        .map((v, i) => {
                            console.log(recipes.filter((v, i) => {
                            return v.sid === pageSid
                        }))                            
                            return <>
                                <div className="d-md-none text-center mt-5">
                                    <img className="col-10 recipe_picture rounded-circle" src={`/recipes_img/${v.res_img}`} alt="" />
                                </div>
                                <div className="glass mt-5 d-md-flex menu ">
                                    <div className="col-5 d-none d-md-block text-center ">
                                        <img className="col-12 recipe_picture rounded-circle position-relative" src={`/recipes_img/${v.res_img}`} alt="" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="w-75 m-auto border-bottom pt-3 pb-md-3">
                                            <div className="recipe_title mt-3 text-center">{v.res_name}</div>
                                            <div className="recipe_title ms-5 text-center"></div>
                                        </div>
                                        <div className="pb-3 d-md-flex justify-content-evenly align-items-center">
                                            <div className="recipe_line pe-md-5 ms-md-5">
                                                <div className="d-flex justify-content-center m-3 pb-md-5">
                                                    <h5 className="recipe_material">材料:</h5>
                                                    <h5 className="recipe_material ingredient">
                                                        {v.ingredient}
                                                    </h5>
                                                </div>
                                                <div className="d-flex justify-content-center m-3 pt-md-5">
                                                    <h5 className="recipe_material">時間:</h5>
                                                    <h5 className="recipe_material">
                                                        {v.cook_time}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="pt-md-5">
                                                <div className="d-flex justify-content-center m-3">
                                                    <h5 className="recipe_material">建議人數:</h5>
                                                    <h5 className="recipe_material">
                                                        {v.serves}
                                                    </h5>
                                                </div>
                                                <div className="d-flex justify-content-center m-3">
                                                    <h5 className="recipe_material">鍋具:</h5>
                                                    <h5 className="recipe_material">
                                                        {v.tool}
                                                    </h5>
                                                </div>
                                                <div className="d-flex justify-content-center m-3">
                                                    <h5 className="recipe_material">葷/素：</h5>
                                                    <h5 className="recipe_material">
                                                        {v.recipe_type}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }) : null}
                    </div>
                </section>
                <section className="mb-5">
                    <div className="j_container pt-md-5">
                        <div className="glass step mb-md-3">
                            <div className="recipe_title border-bottom border-2 w-75 m-auto mb-3 pt-3 pb-md-5 pt-md-5 text-center">How To Do: </div>
                            <div className="accordion col-10 m-auto mb-3 d-md-none" id="accordionExample">
                                <div className="accordion-item glass">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Step 1.
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show text-whi" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                            until the collapse plugin adds the appropriate classNamees that we use to style each
                                            element. These classNamees control the overall appearance, as well as the showing and hiding
                                            via CSS transitions. You can modify any of this with custom CSS or overriding our
                                            default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item glass">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Step 2.
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                            until the collapse plugin adds the appropriate classNamees that we use to style each
                                            element. These classNamees control the overall appearance, as well as the showing and hiding
                                            via CSS transitions. You can modify any of this with custom CSS or overriding our
                                            default variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item glass">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Step 3.
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                            the collapse plugin adds the appropriate classNamees that we use to style each element.
                                            These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item glass">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Step 3.
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                            the collapse plugin adds the appropriate classNamees that we use to style each element.
                                            These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item glass">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Step 3.
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                            the collapse plugin adds the appropriate classNamees that we use to style each element.
                                            These classNamees control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-none d-md-flex col-md-10 m-auto">
                                <div className="col-md-3 border-end border-2">
                                    <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title" onClick={() => toggleTab(1)}>Step 1.</div>
                                    <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title" onClick={() => toggleTab(2)}>Step 2.</div>
                                    <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title" onClick={() => toggleTab(3)}>Step 3.</div>
                                    <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title" onClick={() => toggleTab(4)}>Step 4.</div>
                                    <div className="step_button col-md-7 m-auto text-center rounded-pill border border-dark my-5 py-1 recipe_title" onClick={() => toggleTab(5)}>Step 5.</div>
                                </div>
                                <div className="col-md-9">
                                    {!!tutorial && tutorial.length ? tutorial.filter((v, i) => {
                                        return v.sid === pageSid
                                    })
                                        .map((v, i) => {
                                            console.log('tur', tutorial)
                                            return <>
                                                <h5 className={togglestate === 1 ? "col-md-9 py-md-5 m-auto text-white" : "col-md-9 py-md-5 m-auto text-white content_page"}>{v.step1}</h5>
                                                <h5 className={togglestate === 2 ? "col-md-9 py-md-5 m-auto text-white" : "col-md-9 py-md-5 m-auto text-white content_page"}>{v.step2}</h5>
                                                <h5 className={togglestate === 3 ? "col-md-9 py-md-5 m-auto text-white" : "col-md-9 py-md-5 m-auto text-white content_page"}>{v.step3}</h5>
                                                <h5 className={togglestate === 4 ? "col-md-9 py-md-5 m-auto text-white" : "col-md-9 py-md-5 m-auto text-white content_page"}>{v.step4}</h5>
                                                <h5 className={togglestate === 5 ? "col-md-9 py-md-5 m-auto text-white" : "col-md-9 py-md-5 m-auto text-white content_page"}>{v.step5}</h5>
                                                <div className="d-flex">
                                                    <div className={togglestate === 1 ? "col-9 text-md-center" : "col-9 text-md-center content_page"}>
                                                        <img className="col-md-9" src={`/recipes_img/${v.step1_img}`} alt="" />
                                                    </div>
                                                    <div className={togglestate === 2 ? "col-9 text-md-center" : "col-9 text-md-center content_page"}>
                                                        <img className="col-md-9" src={`/recipes_img/${v.step2_img}`} alt="" />
                                                    </div>
                                                    <div className={togglestate === 3 ? "col-9 text-md-center" : "col-9 text-md-center content_page"}>
                                                        <img className="col-md-9" src={`/recipes_img/${v.step3_img}`} alt="" />
                                                    </div>
                                                    <div className={togglestate === 4 ? "col-9 text-md-center" : "col-9 text-md-center content_page"}>
                                                        <img className="col-md-9" src={`/recipes_img/${v.step4_img}`} alt="" />
                                                    </div>
                                                    <div className={togglestate === 5 ? "col-9 text-md-center" : "col-9 text-md-center content_page"}>
                                                        <img className="col-md-9" src={`/recipes_img/${v.step5_img}`} alt="" />
                                                    </div>
                                                    <div className="col-3 text-center">
                                                        <div className="col-6 m-auto mt-5 rounded-pill fw-bold d-flex align-items-center justify-content-center btn_font_color menu_button">大廚計時器</div>
                                                        <div className="col-md-8 m-auto text-center rounded-pill border border-dark my-4 recipe_title ">30:00</div>
                                                        <h5 className="col-6 m-auto mt-5 text-center text-white">price:300</h5>

                                                        <button className="col-6 rounded-pill m-auto mt-2 py-2 text-white btn_bgc_color text-center" type="button" onClick="" >加入購物車</button>
                                                    </div>
                                                </div>
                                            </>
                                        }) : null}
                                </div>
                            </div>
                            <h5 className="d-md-none col-4 col-md-1 rounded-pill m-auto mb-3 py-2 text-white btn_bgc_color text-center">加入購物車</h5>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default RecipesPage2;
