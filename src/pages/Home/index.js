import React, { useState, useEffect, useRef } from "react"
import Axios from "axios"
import Rellax from "rellax"
import { motion } from "framer-motion"
import "./styles/index.scss"
import { useBackground } from "../../utils/useBackground"
import WeatherApp from "../Home/components/WeatherApp"
import { ROOM_GET_LIST } from "./config/ajax-path";
import { Link } from "react-router-dom";
import MapLink from "./components/mapLink"

function Index(props) {

    const { setBackground } = useBackground();

    // 所有房間資訊
    const [roomList, setRoomList] = useState("");
    // 房型
    const [roomType, setRoomType] = useState([]);
    // 房間選擇狀態
    const [roomSelector, setRoomSelector] = useState([]);


    //背景控制hook
    useEffect(() => {
        setBackground("indexBg.svg");
    }, []);
    
    //滾輪視差hook
    useEffect(() => {
    new Rellax(".animate", {
        speed: -10,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
        })
    },[roomList]);

    // RoomType 控制器
    const RoomTypeHandler = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        // console.log(roomList);
        // console.log(`roomtype${Number(value)+1}`);
        console.log(roomList[`roomtype${Number(value)+1}`])

        if (checked) {
            // const  newRoomType = ([...roomList, value]);
            //設value給roomtype當索引值
            setRoomType(roomList[`roomtype${Number(value)}`]);
        }};

    // // 用get 取得所有的值
    const getData = async () => {
        await Axios.get(
                `${ROOM_GET_LIST}/selectRoom`)
                .then((response) => {
                setRoomList(response.data);
                console.log(response.data);
            });
    }

    // 起始狀態先render getData
    useEffect(() => {
        getData();
    }, []);

    if (roomList.length === 0)
        return <></>;
    
    
        return (
    <>
    <section>
            <div className="weatherCtrl"><WeatherApp/></div>
        <div id="banner">
            <img className="animate"  src="/index_imgs/index_bg8.png" id="8" alt=""/>
            <img className="animate" data-rellax-speed="-9" data-rellax-zindex="5" src="/index_imgs/index_bg7.png" id="7" alt=""/>
            <img className="animate" data-rellax-speed="-8" src="/index_imgs/index_bg6.png" id="6" alt=""/>
            <img className="animate" data-rellax-speed="-7" src="/index_imgs/index_bg5.png" id="5" alt=""/>
            <img className="animate" data-rellax-speed="-6" src="/index_imgs/index_bg4.png" id="4" alt=""/>
            <img className="animate" data-rellax-speed="-5" src="/index_imgs/index_bg3.png" id="3" alt=""/>
            <img className="animate" data-rellax-speed="-4" src="/index_imgs/index_bg2.png" id="2" alt=""/>
            <img src="/index_imgs/index_bg.png" id="1" alt=""/>
        </div>
    </section>
    <section>
        <div id="welcome">
            <motion.div
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{
                delay: 0.3,
                default: { ease: "linear" },
            }}>
                <div className="border-light border-bottom lrSpace p-sm-4">
                    <h2 className="textCenter">Welcome  to  ShuYoung</h2>
                </div>
            </motion.div>
        </div>
    </section>
    <section>
        <div id="room">
            <div>
                <div className="lrSpace p-lg-5">
                    <motion.div
                    initial={{ opacity: 0, y:100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{
                    delay: 0.3,
                    default: { ease: "linear" },
                    }}>
                        <h4 className="textCenter p-lg-5 p-sm-4">房型介紹</h4>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y:100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{
                    delay: 0.3,
                    default: { ease: "linear" },
                }}>
                    <div className="iconGroup">
                        <input
                            className="checkbox-tools"
                            type="radio"
                            name="tools"
                            id="tool-1"
                            value={1}
                            onClick={RoomTypeHandler}
                        />
                        <label
                            className="for-checkbox-tools"
                            htmlFor="tool-1"
                        >
                            <i className="fa-solid fa-campground"></i>
                        </label>
                        <input
                            className="checkbox-tools"
                            type="radio"
                            name="tools"
                            id="tool-2"
                            value={2}
                            onClick={RoomTypeHandler}
                        />
                        <label
                            className="for-checkbox-tools"
                            htmlFor="tool-2"
                        >
                            <i className="fa-solid fa-tents"></i>
                        </label>
                        <input
                            className="checkbox-tools"
                            type="radio"
                            name="tools"
                            id="tool-3"
                            value={3}
                            onClick={RoomTypeHandler}
                        />
                        <label
                            className="for-checkbox-tools"
                            htmlFor="tool-3"
                        >
                            <i className="fa-solid fa-caravan"></i>
                        </label>
                        <input
                            className="checkbox-tools"
                            type="radio"
                            name="tools"
                            id="tool-4"
                            value={4}
                            onClick={RoomTypeHandler}
                        />
                        <label
                            className="for-checkbox-tools"
                            htmlFor="tool-4"
                        >
                            <i className="fa-solid fa-person-hiking"></i>
                        </label>
                    </div>
                </motion.div>
                <div className="lrSpace">
                    <div className="d-flex justify-content-around p-3">
                        {roomType.map((rv, ri) => {
                            return(
                                    <div key={ri}>
                                        <div className="roompic" >    
                                            <img src={"/room_imgs/"+rv.room_folder + "/" +  rv.room_image} alt=""/>
                                        </div>
                                        
                                        <div className="roomTitle">
                                            <h5>{rv.room_name}</h5>
                                        </div>
                                        <div className="roomDes">
                                            <p>{rv.description}</p>
                                        </div>
                                        <div className="room-btn">
                                            <Link to="/shuyoung/booking" ><button className="btn btn-dark">more</button></Link>
                                        </div>
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="line border-light border-bottom"></div>
        </div>
    </section>
    <section>
        <div id="act" >
            <motion.div
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{
                delay: 0.3,
                default: { ease: "linear" },
            }}>
                <div className="bgtext">ACTIVITY</div>
            </motion.div>
                <div className="actrow">
                    <div className="actCard">
                        <div className="actContent">
                            <h4>漂流探險</h4>
                            <p className="cardDes">每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮漂流的各種可能。</p>
                            <Link to="/shuyoung/act/float"><button className="btn btn-dark">MORE</button></Link>
                        </div>
                    </div>
                    <div className="actCard">
                        <div className="actContent">
                            <h4>夜遊觀星</h4>
                            <p className="cardDes">我想，把夜遊的意義想清楚，對各位來說並不是一件壞事。荀況相信，賢能不待次而舉。</p>
                            <Link to="/shuyoung/act/night"><button className="btn btn-dark">MORE</button></Link>
                        </div>
                    </div>
                    <div className="actCard">
                        <div className="actContent">
                            <h4>親子溯溪</h4>
                            <p className="cardDes">親子溯溪可以說是有著成為常識的趨勢。一般來講，我們都必須務必慎重的考慮考慮。</p>
                            <Link to="/shuyoung/act/upstream"><button className="btn btn-dark">MORE</button></Link>
                        </div>
                    </div>
                    <div className="actCard actimg4">
                        <div className="actContent">
                            <h4>全地形沙灘車</h4>
                            <p className="cardDes">全地形沙灘車，到底應該如何實現。如果別人做得到，那我也可以做到。全地形沙灘車似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。</p>
                            <Link to="/shuyoung/act/atv"><button className="btn btn-dark">MORE</button></Link>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    <section>
        <div id="recipes">
            <div className="whitebg">
                <motion.div
                    initial={{ opacity: 0, y:100 }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{
                    delay: 0.3,
                    default: { ease: "linear" },
                }}>
                    <div className="bgtextL">RECIPES</div>
                </motion.div>
            </div>
            <div className="recipesRow">
                <motion.div
                    initial={{ opacity: 0, x:-100 }}
                    whileInView={{ opacity: 1, x:0 }}
                    transition={{
                    delay: 0.4,
                    default: { ease: "linear" },
                }}>
                    <div className="square">
                        <div className="sqContent">
                            <div className="sqTitle">天菜大廚</div>
                            <div className="squareDes">若無法徹底理解廚師，恐怕會是人類的一大遺憾。
                            我們不得不面對一個非常尷尬的事實，那就是，阿拉伯說過一句經典的名言，斃虎者飽餐虎肉，畏虎者葬身虎口。</div>
                            <button className="btn btn-dark">MORE</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                            initial={{ opacity: 0, x:100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{
                            delay: 0.4,
                            default: { ease: "linear" },
                        }}>
                <div className="square sq1">
                    
                        <div className="sqContent">
                            <div className="sqTitle">大廚必比登</div>
                            <div className="squareDes">若無法徹底理解廚師，恐怕會是人類的一大遺憾。
                            我們不得不面對一個非常尷尬的事實，那就是，阿拉伯說過一句經典的名言，斃虎者飽餐虎肉，畏虎者葬身虎口。</div>
                            <button className="btn btn-dark">MORE</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
    <section>
        <div id="map">
            <motion.div
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{
                delay: 0.3,
                default: { ease: "linear" },
            }}>
                <div className="bgtext">CAMP MAP</div>
            </motion.div>

            <div className="mapcontainer">
                <MapLink/>
                <Link to="/shuyoung/SuMap"><div className='mapbtn btn_works'>觀看營區地圖</div></Link>
            </div>
        </div>
    </section>
    </>
    )
}

export default Index
