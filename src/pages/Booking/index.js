import React, { useState, useEffect } from "react";

import Axios from "axios";

function Index(props) {
    //設定每一個input 的 狀態
    const [roomType, setRoomType] = useState("");
    const [roomName, setRoomName] = useState("");
    const [roomPrice, setRoomPrice] = useState("");
    const [personNum, setPersonNum] = useState("");
    const [roomImg, setRoomImg] = useState("");
    const [roomRec, setRoomRec] = useState("");

    const [roomList, setRoomList] = useState([]);

    // 用get 取得所有的值
    const getData = () => {
        Axios.get("http://localhost:3700/booking/select").then((response) => {
            setRoomList(response.data);
            console.log(response.data);
        });
    };

    // 將取到的值呈現出來 componentDidMount()
    useEffect(() => {
        getData();
    }, []);

    //用 post 回傳後面的object 給 node 後端
    const submitReview = () => {
        Axios.post("http://localhost:3700/booking/add", {
            roomType: roomType,
            roomName: roomName,
            roomPrice: roomPrice,
            personNum: personNum,
            roomImg: roomImg,
            roomRec: roomRec,
        })
            .then(() => {
                alert("successful alert");
            })
            .catch((err) => {
                alert("err:", err);
            });
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Add room</h3>
                        <form name="form1">
                            <div className="mb-3">
                                <label
                                    htmlFor="room_type"
                                    className="form-label"
                                >
                                    Room type
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="room_type"
                                    name="room_type"
                                    onChange={(e) => {
                                        setRoomType(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="room_name"
                                    className="form-label"
                                >
                                    Room name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="room_name"
                                    name="room_name"
                                    onChange={(e) => {
                                        setRoomName(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="room_price"
                                    className="form-label"
                                >
                                    Room price
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="room_price"
                                    name="room_price"
                                    onChange={(e) => {
                                        setRoomPrice(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="person_num"
                                    className="form-label"
                                >
                                    Person number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="person_num"
                                    name="person_num"
                                    onChange={(e) => {
                                        setPersonNum(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="room_image"
                                    className="form-label"
                                >
                                    room_image
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="room_image"
                                    name="room_image"
                                    onChange={(e) => {
                                        setRoomImg(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="checkbox"
                                    id="recommend"
                                    name="recommend"
                                    value="1"
                                    onChange={(e) => {
                                        setRoomRec(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="recommend"
                                    className="form-label"
                                >
                                    recommend
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={submitReview}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Room_type</th>
                                    <th scope="col">Room_name</th>
                                    <th scope="col">Room_price</th>
                                    <th scope="col">Person_number</th>
                                    <th scope="col">Room_recommand</th>
                                    <th scope="col">Room_img</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roomList &&
                                    roomList.map((v, i) => {
                                        return (
                                            <tr key={v.sid}>
                                                <th scope="row">{v.sid}</th>
                                                <td>{v.room_type}</td>
                                                <td>{v.room_name}</td>
                                                <td>{v.room_price}</td>
                                                <td>{v.person_num}</td>
                                                <td>{v.recommend}</td>
                                                <td>{v.room_image}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
                                                        delete
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        style={{
                                                            color: "white",
                                                        }}
                                                    >
                                                        update
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
