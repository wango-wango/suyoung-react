import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import "./styles/index.scss"

function Index(props) {

    // //偵聽滑動事件
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    // });
    
    // //抓圖id
    // let bg1 = document.getElementById('1');
    // let bg2 = document.getElementById('2');
    // let bg3 = document.getElementById('3');
    // let bg4 = document.getElementById('4');
    // let bg5 = document.getElementById('5');
    // let bg6 = document.getElementById('6');
    // let bg7 = document.getElementById('7');
    // let bg8 = document.getElementById('8');
    
    // //事件Function
    // const handleScroll = () => {
    // let value = window.scrollY;
    
    // bg1.style.top = value * -1.6 + 'px';
    // bg2.style.top = value * -1.4 + 'px';
    // bg3.style.top = value * -1.2 + 'px';
    // bg4.style.top = value * -1 + 'px';
    // bg5.style.top = value * -0.8 + 'px';
    // bg6.style.top = value * -0.6 + 'px';
    // bg7.style.top = value * -0.4 + 'px';
    // bg8.style.top = value * -0.2 + 'px';
    // }

    return (
    <>
    <section>
        <div id="banner">
            <img src="/index_imgs/index_bg8.png" id="8" alt=""/>
            <img src="/index_imgs/index_bg7.png" id="7" alt=""/>
            <img src="/index_imgs/index_bg6.png" id="6" alt=""/>
            <img src="/index_imgs/index_bg5.png" id="5" alt=""/>
            <img src="/index_imgs/index_bg4.png" id="4" alt=""/>
            <img src="/index_imgs/index_bg3.png" id="3" alt=""/>
            <img src="/index_imgs/index_bg2.png" id="2" alt=""/>
            <img src="/index_imgs/index_bg.png" id="1" alt=""/>
        </div>
    </section>
    <section>
        <div id="welcome">
            <div className="border-light border-bottom lrSpace">
                <h2 className="textCenter">Welcome  to  ShuYoung</h2>
            </div>
        </div>
    </section>
    <section>
        <div id="room">
            <div className="lrSpace p-lg-5">
                <h4 className="textCenter p-lg-5">房型介紹</h4>
            </div>
            <div className="lrSpace p-lg-5">
                <div className="d-flex justify-content-around roomIcon">
                    <div className="">
                        <img src="/index_imgs/camp.png" alt=""/>
                    </div>
                    <div className="">
                        <img src="/index_imgs/family.png" alt=""/>
                    </div>
                    <div className="roomActive">
                        <img src="/index_imgs/beauty.png" alt=""/>
                    </div>
                    <div className="">
                        <img src="/index_imgs/van.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="lrSpace">
                <div className="d-flex justify-content-around roompic">
                    <div className="roomActive">
                        <img className="" src="/img/room/beauty/roomA 1.jpeg" alt=""/>
                    </div>
                    <div className="">
                        <img className="" src="/img/room/beauty/roomA 2.jpeg" alt=""/>
                    </div>
                    <div className="">
                        <img className="" src="/img/room/beauty/roomA 3.jpeg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="roomTitle">
                <h4>冬之戀季</h4>
            </div>
            <div className="roomDes">
                <p>需要考慮周詳冬天的影響及因應對策。儘管如此，我們仍然需要對冬天保持懷疑的態度。對於冬天，我們不能不去想，卻也不能走火入魔。在這種困難的抉擇下，本人思來想去，寢食難安。我們需要淘汰舊有的觀念，那麼，冬天對我來說有著舉足輕重的地位，必須要嚴肅認真的看待。</p>
            </div>
            <div className="line border-light border-bottom"></div>
        </div>
    </section>
    <section>
        <div id="act" >
            <div className="bgtext">ACTIVITY</div>
            <div className="actrow">
                <div className="actCard">
                    <div className="actContent">
                        <h2 className="title">漂流探險</h2>
                        <p className="cardDes">每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮漂流的各種可能。</p>
                        <button className="btn btn-dark">MORE</button>
                    </div>
                </div>
                <div className="actCard">
                    <div className="actContent">
                        <h2 className="title">夜遊觀月</h2>
                        <p className="cardDes">我想，把夜遊的意義想清楚，對各位來說並不是一件壞事。荀況相信，賢能不待次而舉。</p>
                        <button className="btn btn-dark">MORE</button>
                    </div>
                </div>
                <div className="actCard">
                    <div className="actContent">
                        <h2 className="title">親子溯溪</h2>
                        <p className="cardDes">親子溯溪可以說是有著成為常識的趨勢。一般來講，我們都必須務必慎重的考慮考慮。</p>
                        <button className="btn btn-dark">MORE</button>
                    </div>
                </div>
                <div className="actCard actimg4">
                    <div className="actContent">
                        <h2 className="title">全地形沙灘車</h2>
                        <p className="cardDes">全地形沙灘車，到底應該如何實現。如果別人做得到，那我也可以做到。全地形沙灘車似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。</p>
                        <button className="btn btn-dark">MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div id="recipes">
            <div className="whitebg">
                <div className="bgtextL">RECIPES</div>
            </div>
            <div className="recipesRow d-flex justify-content-center">
                <div className="square">
                    <div className="sqContent">
                        <div className="sqTitle">天菜大廚</div>
                        <div className="squareDes">若無法徹底理解廚師，恐怕會是人類的一大遺憾。
                        我們不得不面對一個非常尷尬的事實，那就是，阿拉伯說過一句經典的名言，斃虎者飽餐虎肉，畏虎者葬身虎口。</div>
                        <button className="btn btn-dark">MORE</button>
                    </div>
                </div>
                <div className="square sq1">
                    <div className="sqContent">
                        <div className="sqTitle">大廚必比登</div>
                        <div className="squareDes">若無法徹底理解廚師，恐怕會是人類的一大遺憾。
                        我們不得不面對一個非常尷尬的事實，那就是，阿拉伯說過一句經典的名言，斃虎者飽餐虎肉，畏虎者葬身虎口。</div>
                        <button className="btn btn-dark">MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div id="map">
            <div className="bgtext">CAMP MAP</div>
        </div>
    </section>
    </>
    )
}

export default Index;
