import React, { useEffect } from "react";
import RoomCard from "./components/RoomCard";
import RoomEquipment from "./components/RoomEquipment";
import BookingDetailArea from "./components/BookingDetailArea";
import "./style/style.scss";
import { useBackground } from "../../../../utils/useBackground";
import DetailPictures from "./components/DetailPictures";
import DetailParagraph from "./components/DetailParagraph";
import GuessYouLike from "./components/GuessYouLike";
function Index(props) {
    // 來自useBackground 的設定
    const { setBackground } = useBackground();
    // 進入該頁設定背景
    useEffect(() => {
        setBackground("bg1.svg");
    }, []);
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
    };

    return (
        <>
            <section className="room_order_detail">
                <div class="room_order_container">
                    <div class="room_Rows">
                        <div class="room_col_left">
                            <RoomCard />
                            <RoomEquipment />
                        </div>
                        <div class="room_col_right">
                            <BookingDetailArea />
                        </div>
                    </div>
                </div>
                <div id="scrolldown">
                    <a onClick={() => this.scrollToAnchor("here")}>
                        <span></span>Scroll
                    </a>
                </div>
            </section>
            <section className="room_detail_up">
                <a id="here"></a>
                <div class="detail_up_title">
                    <h1>GSAP Scroll</h1>
                    <DetailPictures />
                </div>
            </section>
            <section className="room_detail_down">
                <DetailParagraph />
            </section>
            <section className="guess_you_like">
                <GuessYouLike />
            </section>
        </>
    );
}

export default Index;
