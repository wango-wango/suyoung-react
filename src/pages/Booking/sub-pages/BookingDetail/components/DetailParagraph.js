import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function DetailParagraph(props) {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // 製作內容文字(到時候撈資料庫跑map)
        const roomDetailParagraph = document.querySelector(
            ".room_detail_paragraph"
        );
        let htmlContainer = "";

        for (let i = 0; i < 6; i++) {
            htmlContainer += `<div class="project-trigger">
            <div class="description">
                <h3 class="project-text">Title</h3>
                <h4 class="project-text">November 2020</h4>
                <p class="project-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Fuga impedit numquam modi accusamus iusto eaque
                    libero velit saepe tempore!
                </p>
            </div>
        </div>`;
        }
        roomDetailParagraph.innerHTML = htmlContainer;

        // gsap 特效
        const projectTriggers = document.querySelectorAll(".project-trigger");

        projectTriggers.forEach(addTimeline);

        function addTimeline(description, index) {
            const text = description.querySelectorAll(".project-text");

            const timeline = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: description,
                        start: "center bottom",
                        ease: "power2",
                        toggleActions: "play none none reverse",
                    },
                })

                .from(
                    text,
                    {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.2,
                    },
                    "-=0.5"
                );
        }
    }, []);
    return (
        <>
            <div className="room_detail_paragraph"></div>
        </>
    );
}

export default DetailParagraph;
