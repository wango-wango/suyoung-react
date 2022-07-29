import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function DetailPictures(props) {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const roomDetailContainer = document.querySelector(
            ".room_detail_container"
        );
        let htmlContainer = "";

        for (let i = 0; i < 6; i++) {
            htmlContainer += `<div class="detail_up_content filled-text${
                i + 1
            }">BEDROOM VIEW</div>
            <div class="detail_up_content outline-text${
                i + 1
            }">BEDROOM VIEW</div>
            <img class="image${i + 1}" src="/room_imgs/family/family-typeA${
                i + 1
            }.jpeg" />`;
        }
        roomDetailContainer.innerHTML = htmlContainer;
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
                    // markers: true,
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
                    // markers: true,
                },
                x: 500,
            });
        }
    }, []);

    return (
        <>
            <div class="room_detail_container">
                <div class="detail_up_content filled-text1">BEDROOM VIEW</div>
                <div class="detail_up_content outline-text1">BEDROOM VIEW</div>
                <img
                    class="image1"
                    src="/room_imgs/beauty/roomA1.jpeg"
                    alt=""
                />
            </div>
        </>
    );
}

export default DetailPictures;
