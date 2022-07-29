import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function RoomCard(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div class="room_Card">
                <div class="room_pic">
                    <div class="swiper_container">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA1.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA2.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA3.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA4.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA5.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA6.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA1.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA2.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA3.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA4.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA5.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="/room_imgs/beauty/roomA6.jpeg"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="room_content">
                    <div class="room_card_title">
                        <h3>I'm title</h3>
                    </div>
                    <div class="room_card_subtitle">
                        <h4>I'm subtitle</h4>
                    </div>
                    <div class="room_card_tag"></div>
                    <div class="room_card_paragraph">
                        <p>※注意事項</p>
                        <p>1. 入住時間：12:00 PM</p>
                        <p>2. 退房時間：隔日11:00AM以前</p>
                        <p>3. 房內嚴禁吸菸</p>
                        <p>4. 請共同愛惜房內所有物品，如有損壞需照價賠償。</p>
                        <p>
                            5.
                            請妥善保管您的貴重物品，本園對貴重物品遺失概不負責。
                        </p>
                        <p>
                            6.
                            如遇颱風、地震等天災、交通因中斷，經政府或旅客所在地政府發佈停止上班上課，皆可100%退費
                        </p>
                        <p>
                            7.
                            營區停車場僅供車輛停放之用，營區對停放之車輛不負保管責任。
                        </p>
                    </div>
                    <div class="room_card_Price">
                        <p>TWD:</p>
                        <h4>16800</h4>
                        <p>晚</p>
                    </div>
                </div>
            </div>
        </>
    );
}

RoomCard.propTypes = {};

export default RoomCard;
