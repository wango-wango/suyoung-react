import React, { useEffect } from "react";

function GuessYouLike(props) {
    useEffect(() => {
        const guessCard = document.querySelector(".guess_card_flex");
        let htmlContainer = "";
        for (let i = 1; i <= 4; i++) {
            htmlContainer += `<div class="guess_card">
        <div class="guess_images">
            <img
                class="guess_img"
                src="/room_imgs/family/family-typeC${i}.jpg"
                alt=''
            />
        </div>
        <div class="guess_content">
            <div class="guess_content_title">
                <h5>niceRoom</h5>
            </div>
            <div class="guess_content_paragragh">
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Earum accusamus cupiditate
                suscipit qui dolor quisquam quam, quae modi
                deserunt tenetur. Tenetur laboriosam est
                repellat reiciendis quia dolor aut sed veniam!
            </div>
        </div>
    </div>`;
        }
        guessCard.innerHTML = htmlContainer;
    }, []);

    return (
        <>
            <div class="guess_container">
                <div class="guess_title">
                    <h1 id="guess_h1">GUESS YOU LIKE</h1>
                </div>
                <div class="guess_card_flex">
                    {/* <div class="guess_card">
                        <div class="guess_images">
                            <img
                                class="guess_img"
                                src="/room_imgs/family/family-typeB1"
                                alt=''
                            />
                        </div>
                        <div class="guess_content">
                            <div class="guess_content_title">
                                <h5>niceRoom</h5>
                            </div>
                            <div class="guess_content_paragragh">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Earum accusamus cupiditate
                                suscipit qui dolor quisquam quam, quae modi
                                deserunt tenetur. Tenetur laboriosam est
                                repellat reiciendis quia dolor aut sed veniam!
                            </div>
                        </div>
                    </div>
                    <div class="guess_card">
                        <div class="guess_images">
                            <img
                                class="guess_img"
                                src="./src/family-typeB5.jpeg"
                                alt=''
                            />
                        </div>
                        <div class="guess_content">
                            <div class="guess_content_title">
                                <h5>niceRoom</h5>
                            </div>
                            <div class="guess_content_paragragh">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Earum accusamus cupiditate
                                suscipit qui dolor quisquam quam, quae modi
                                deserunt tenetur. Tenetur laboriosam est
                                repellat reiciendis quia dolor aut sed veniam!
                            </div>
                        </div>
                    </div>
                    <div class="guess_card">
                        <div class="guess_images">
                            <img
                                class="guess_img"
                                src="./src/family-typeB5.jpeg"
                                alt=''
                            />
                        </div>
                        <div class="guess_content">
                            <div class="guess_content_title">
                                <h5>niceRoom</h5>
                            </div>
                            <div class="guess_content_paragragh">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Earum accusamus cupiditate
                                suscipit qui dolor quisquam quam, quae modi
                                deserunt tenetur. Tenetur laboriosam est
                                repellat reiciendis quia dolor aut sed veniam!
                            </div>
                        </div>
                    </div>
                    <div class="guess_card">
                        <div class="guess_images">
                            <img
                                class="guess_img"
                                src="./src/family-typeB5.jpeg"
                                alt=''
                            />
                        </div>
                        <div class="guess_content">
                            <div class="guess_content_title">
                                <h5>niceRoom</h5>
                            </div>
                            <div class="guess_content_paragragh">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Earum accusamus cupiditate
                                suscipit qui dolor quisquam quam, quae modi
                                deserunt tenetur. Tenetur laboriosam est
                                repellat reiciendis quia dolor aut sed veniam!
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default GuessYouLike;
