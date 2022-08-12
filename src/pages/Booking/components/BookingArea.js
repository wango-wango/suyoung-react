import React, { useState } from "react";
import { DateRangePicker, InputNumber, InputGroup } from "rsuite";
import { useBookingList } from "../../../utils/useBookingList";
import useRWD from "../../../utils/useRWD";
const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

function BookingArea(props) {
    const { bookingList, setBookingList } = useBookingList();
    const [datePicker, setDatePicer] = useState({
        startDate: "",
        EndDate: "",
        perNight: "",
    });
    const [personCount, setPersonCount] = useState({
        adults: "",
        kids: "",
    });
    const [adultValue, setAdultValue] = useState(0);
    const [kidsValue, setKidsValue] = useState(0);

    const device = useRWD();

    const formatDate = (date) => {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    };
    const handleMinusA = () => {
        if (adultValue > 0) {
            setAdultValue(parseInt(adultValue, 10) - 1);
            setPersonCount({
                ...personCount,
                adults: parseInt(adultValue, 10) - 1,
            });
            setBookingList({
                ...bookingList,
                adults: parseInt(adultValue, 10) - 1,
            });
        }
    };
    const handleMinusK = () => {
        if (kidsValue > 0) {
            setKidsValue(parseInt(kidsValue, 10) - 1);
            setPersonCount({
                ...personCount,
                kids: parseInt(kidsValue, 10) - 1,
            });
            setBookingList({
                ...bookingList,
                kids: parseInt(kidsValue, 10) - 1,
            });
        }
    };
    const handlePlusA = () => {
        if (adultValue < 8) {
            setAdultValue(parseInt(adultValue, 10) + 1);
            setPersonCount({
                ...personCount,
                adults: parseInt(adultValue, 10) + 1,
            });
            setBookingList({
                ...bookingList,
                adults: parseInt(adultValue, 10) + 1,
            });
        }
    };
    const handlePlusK = () => {
        if (kidsValue < 4) {
            setKidsValue(parseInt(kidsValue, 10) + 1);
            setPersonCount({
                ...personCount,
                kids: parseInt(kidsValue, 10) + 1,
            });
            setBookingList({
                ...bookingList,
                kids: parseInt(kidsValue, 10) + 1,
            });
        }
    };

    return (
        <>
            <div className="booking_area">
                <div className="dateRangePicker">
                {device === "mobile" ? (<DateRangePicker
                        block
                        showOneCalendar
                        disabledDate={combine(allowedMaxDays(7), beforeToday())}
                        onChange={(v) => {
                            console.log(v);
                            if(v){
                                setBookingList({
                                ...bookingList,
                                startDate: formatDate(v[0].toDateString()),
                                endDate: formatDate(v[1].toDateString()),
                                perNight: (v[1] - v[0]) / 86400000,
                            });
                            setDatePicer({
                                ...datePicker,
                                startDate: v[0].toDateString(),
                                endDate: v[1].toDateString(),
                                perNight: (v[1] - v[0]) / 86400000,
                            });
                            }else{
                                setBookingList({
                                ...bookingList,
                                startDate: "",
                                endDate: "",
                                perNight:"",
                            });
                            setDatePicer({
                                ...datePicker,
                                startDate: "",
                                endDate: "",
                                perNight: "",
                            });
                            }
                        }}
                    />) : (<DateRangePicker
                        
                        disabledDate={combine(allowedMaxDays(7), beforeToday())}
                        onChange={(v) => {
                            console.log(v);
                            if(v){
                                setBookingList({
                                ...bookingList,
                                startDate: formatDate(v[0].toDateString()),
                                endDate: formatDate(v[1].toDateString()),
                                perNight: (v[1] - v[0]) / 86400000,
                            });
                            setDatePicer({
                                ...datePicker,
                                startDate: v[0].toDateString(),
                                endDate: v[1].toDateString(),
                                perNight: (v[1] - v[0]) / 86400000,
                            });
                            }else{
                                setBookingList({
                                ...bookingList,
                                startDate: "",
                                endDate: "",
                                perNight:"",
                            });
                            setDatePicer({
                                ...datePicker,
                                startDate: "",
                                endDate: "",
                                perNight: "",
                            });
                            }
                        }}
                    />)}
                    
                </div>
                <div className="booking_result_date">
                    <p>
                        <span>{datePicker.perNight}</span> 晚
                    </p>
                    <div className="booking_result_datePicer">
                        <p>
                            startDate: <span>{datePicker.startDate}</span>
                        </p>
                        <p>
                            endDate: <span>{datePicker.endDate}</span>
                        </p>
                    </div>
                </div>
                <div className="booking_person_area">
                    <div className="booking_person">
                        <label>成人</label>
                        <InputGroup>
                            <InputGroup.Button onClick={handleMinusA}>
                                -
                            </InputGroup.Button>
                            <InputNumber
                                className={"custom-input-number"}
                                value={adultValue}
                                onChange={setAdultValue}
                            />
                            <InputGroup.Button onClick={handlePlusA}>
                                +
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                    <div className="booking_person">
                        <label>小孩</label>
                        <InputGroup>
                            <InputGroup.Button onClick={handleMinusK}>
                                -
                            </InputGroup.Button>
                            <InputNumber
                                className={"custom-input-number"}
                                value={kidsValue}
                                onChange={setKidsValue}
                            />
                            <InputGroup.Button onClick={handlePlusK}>
                                +
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                </div>
                <div className="booking_result">
                    <div className="booking_result_PersonNum">
                        <p>
                            <span>{personCount.adults}</span> 位成人 |{" "}
                            <span>{personCount.kids}</span>位小孩
                        </p>
                        <p>每加一位小孩需付人頭費(NT.200)</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingArea;
