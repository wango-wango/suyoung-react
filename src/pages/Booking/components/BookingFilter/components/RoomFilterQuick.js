import React, {Fragment , useState}from 'react'
import { useBookingList } from "../../../../../utils/useBookingList";
import {Whisper,Popover} from "rsuite";
import { motion } from "framer-motion";
import { TiDelete } from "react-icons/ti";

function RoomFilterRoomSelect(props) {

    // 搜尋功能 
    const {searchName, setSearchName, searchContext, setSearchContext} = props;

     /* ------ useContext 的值 ------ */
    const { bookingList, setBookingList } = useBookingList();

    // 篩選器跳出開關
    const [open, setOpen] = useState(true);

    // // 先儲存使用者輸入的內容
    // const [searchContext, setSearchContext] = useState("");
    // 搜尋 控制器
    const SearchHandler = (e) => {
        const value = e.target.value;
        setSearchContext(value);
    };

    const SendSearchToBooking = () => {
        setSearchName(searchContext);
    }

     /* reset */
    const resetSearch = () => {
        // setBookingList({ ...bookingList, roomSelector: [] });
        setSearchName("");
        setSearchContext("");
    };

  return (
    <>
    
        <div className="room_title roomSelect_title">
            <Whisper
                followCursor
                placement="top"
                speaker={
                    <Popover arrow={false}>
                        點我篩選
                    </Popover>
                }
            >
                <button onClick={()=>{setOpen(!open)}}>快速篩選</button>
            </Whisper>
            {open ? (
                <motion.button 
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity:0, y: -100 }}
                    transition={{
                            duration: 0.5,
                            default: { ease: "linear" },
                    }}
                    onClick={resetSearch}
                    className='delete_filter_roomType' 
                    > 
                    <TiDelete size={28} />
                </motion.button>):null}
        </div>
        {open ? (

            <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity:0, y: -100 }}
                    transition={{
                            duration: 0.5,
                            default: { ease: "linear" },
                    }} className="roomSearch_area">
                    <div>
                        <input type="text" onChange={SearchHandler} value={searchContext}/>
                        <button onClick={SendSearchToBooking}>送出</button>
                    </div>
                    <div>
                        <input
                            className="checkbox-priceUp"
                            type="checkbox"
                            name="priceUp"
                            id={"priceUp-1"}
                            // value={t.t_id}
                            // onChange={tagHandler}
                            // checked={tagValue.includes(
                            //     t.t_id + ""
                            // )}
                        />
                        <label
                            className="for-checkbox-priceUp"
                            htmlFor={"priceUp-1"}
                        >
                            <span className="text">
                                價格由低到高
                            </span>
                        </label>
                        <input
                            className="checkbox-priceUp"
                            type="checkbox"
                            name="priceUp"
                            id={"priceUp-2"}
                            // value={t.t_id}
                            // onChange={tagHandler}
                            // checked={tagValue.includes(
                            //     t.t_id + ""
                            // )}
                        />
                        <label
                            className="for-checkbox-priceUp"
                            htmlFor={"priceUp-2"}
                        >
                            <span className="text">
                                價格由高到低
                            </span>
                        </label>
                    </div>
            </motion.div> 
            ): null }
    </>
  )
}

export default RoomFilterRoomSelect
