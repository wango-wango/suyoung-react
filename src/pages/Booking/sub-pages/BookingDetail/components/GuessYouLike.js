import React, { useEffect } from "react";

function GuessYouLike(props) {
    const { otherRoomList } = props;
    

    return (
        <>
            <div className="guess_container">
                <div className="guess_title">
                    <h1 id="guess_h1">GUESS YOU LIKE</h1>
                </div>
                <div className="guess_card_flex">
                    {otherRoomList.map((v, i) => {
                        return (
                            <div className="guess_card" key={i}>
                                <div className="guess_images">
                                    <img
                                        className="guess_img"
                                        src={
                                            "/room_imgs/" +
                                            v.room_folder +
                                            "/" +
                                            v.room_image
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="guess_content">
                                    <div className="guess_content_title">
                                        <h4>{v.room_name}</h4>
                                    </div>
                                    <h5>
                                        {v.person_num}人房 {v.person_num / 2}
                                        張雙人床
                                    </h5>
                                    <h5>NTD:{v.room_price}</h5>
                                    <div className="guess_content_paragragh">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Earum accusamus
                                        cupiditate suscipit qui dolor quisquam
                                        quam, quae modi deserunt tenetur.
                                        Tenetur laboriosam est repellat
                                        reiciendis quia dolor aut sed veniam!
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default GuessYouLike;
