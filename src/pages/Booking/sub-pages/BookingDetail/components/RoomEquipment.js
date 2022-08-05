import React from "react";

function RoomEquipment(props) {
    const { eqiList } = props;
    return (
        <>
            <div className="room_equipment">
                <div className="room_equipment_title">
                    <h5>房內設施</h5>
                </div>
                <div className="room_equipment_box">
                    {eqiList.map((v, i) => {
                        return (
                            <div className="room_equipment_btn" key={i}>
                                <span>{v.equipment}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default RoomEquipment;
