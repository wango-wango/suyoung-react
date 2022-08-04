import React, { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function DetailPictures(props) {
    const { picList } = props;

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (picList.length === 0) return;

        for (let i = 1; i <= 5; i += 2) {
            gsap.to(`.filled-text${i}, .outline-text${i}`, {
                scrollTrigger: {
                    trigger: `.filled-text${i}, .outline-text${i}`,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                x: 500,
            });

            gsap.to(`.image${i}`, {
                scrollTrigger: {
                    trigger: `.image${i}`,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                x: -500,
            });
        }
        for (let i = 2; i <= 6; i += 2) {
            gsap.to(`.filled-text${i}, .outline-text${i}`, {
                scrollTrigger: {
                    trigger: `.filled-text${i}, .outline-text${i}`,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                x: -500,
            });

            gsap.to(`.image${i}`, {
                scrollTrigger: {
                    trigger: `.image${i}`,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                x: 500,
            });
        }
    }, [picList]);

    if (picList.length === 0) return;
    return (
        <>
            <div className="room_detail_container">
                {picList.map((pv, pi) => {
                    return (
                        <Fragment key={pi}>
                            <div
                                className={
                                    "detail_up_content filled-text" + (pi + 1)
                                }
                            >
                                {pv.room_folder}ROOM VIEW
                            </div>
                            <div
                                className={
                                    "detail_up_content outline-text" + (pi + 1)
                                }
                            >
                                {pv.room_folder}ROOM VIEW
                            </div>
                            <img
                                className={"image" + (pi + 1)}
                                src={
                                    "/room_imgs/" +
                                    pv.room_folder +
                                    "/" +
                                    pv.pic_name
                                }
                                alt=""
                            />
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
}

export default DetailPictures;
