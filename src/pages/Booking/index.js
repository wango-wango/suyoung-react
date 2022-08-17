import React, { useEffect , useState} from "react";
import BookingArea from "./components/BookingArea";
import BookingCard from "./components/BookingCard";
import BookingFilter from "./components/BookingFilter";
import "./styles/index.scss";
import { useBackground } from "../../utils/useBackground";
import { useSpinner } from "../../useSpinner";
import { BK_GET_LIST } from "./config/ajax-path";
import { useBookingList } from "../../utils/useBookingList";
import { useAuth } from "../Login/sub-pages/AuthProvider";
import Axios from "axios";

function Index(props) {


    const { setBackground } = useBackground();
    const { spinner, setLoading } = useSpinner(4000);
     // useContext
     const { bookingList, setBookingList } = useBookingList();
     const { setAuth, ...auth } = useAuth();

    // 所有room 列表
    const [roomList, setRoomList] = useState([]);
    // 所有Tag 列表
    const [tagList, setTagList] = useState([]);
    // 會員的 favList roomsid
    const [favList, setFavList] = useState([]);
    

    /* ------ 監控所有篩選按鍵的狀態 ------ */

    // 房型確認狀態
    const [checkroomType, setCheckRoomType] = useState([]);

    // 檢查房間狀態
    const [roomSelector, setRoomSelector] = useState([]);

    // 檢查價格狀態
    const [value, setValue] = useState([1000, 5000]);

    // 檢查標籤狀態
    const [tagValue, setTagValue] = useState([]);

    // 檢查大家怎麼說狀態
    const [recommend, setRecommend] = useState(false);
    const [popular, setPopular] = useState(false);

    // 文字篩選
    const [searchName, setSearchName] = useState("");
    // 先儲存使用者輸入的內容
    const [searchContext, setSearchContext] = useState("");

    // 用get 取得所有的值
    const getData = async () => {
        // 從 bookingList解構
        const {
            adults,
            nextDate,
            endDate,
            roomType,
            startPrice,
            endPrice,
            tagCheck,
            popular,
            recommend,
            roomSelector,
        } = bookingList;

        await Axios.get(
            `${BK_GET_LIST}/selectRoom?adults=${adults}&nextDate=${nextDate}&endDate=${endDate}&roomType=${roomType}&startPrice=${startPrice}&endPrice=${endPrice}&tagCheck=${tagCheck}&popular=${popular}&recommend=${recommend}&roomSelector=${roomSelector}`
        ).then((response) => {
            setRoomList(response.data.roomList);
            setTagList(response.data.tagList);
            console.log(response.data.roomList);
        });

        if(auth.m_id){
            // 取得所有favlist 的 roomSid
        await Axios.get(`${BK_GET_LIST}/favlist?memberId=${auth.m_id}`).then(
            (response) => {
                // setFavList(response.data);
                setFavList(response.data.map((v) => +v.fav_list_kind));
            }
        );
        }
        
    };
    
    // 得到bookingList 的值就執行 getData
    useEffect(() => {
        getData();
    }, [bookingList]);
    
    //設定背景
    useEffect(() => {
        setBackground("bg1.svg");
           // 取得會員資料就存進去bookingList
        if(auth.authorized || auth.success){
            setBookingList({...bookingList,memberId: auth.m_id});
        }
    }, []);

    // 設定 spinner 
    useEffect(() => {
        setLoading(true);
    }, [setLoading]);

    return (
        <>
            {spinner}
            <section className="Booking">
                <div className="Booking_container">
                    <div className="booking_area_container">
                        <BookingArea />
                    </div>

                    <div className="room_area_flex">
                        <BookingFilter searchName={searchName} setSearchName={setSearchName} checkroomType={checkroomType} setCheckRoomType={setCheckRoomType} roomSelector={roomSelector} setRoomSelector={setRoomSelector} value={value} setValue={setValue} tagValue={tagValue} setTagValue={setTagValue} recommend={recommend} setRecommend={setRecommend} popular={popular} setPopular={setPopular} searchContext={searchContext} setSearchContext={setSearchContext} />

                        <BookingCard roomList={roomList} setRoomList={setRoomList} tagList={tagList} favList={favList} setFavList={setFavList} searchName={searchName} setSearchName={setSearchName} setCheckRoomType={setCheckRoomType} setRoomSelector={setRoomSelector}  setValue={setValue} setTagValue={setTagValue} setRecommend={setRecommend} setPopular={setPopular} setSearchContext={setSearchContext}  />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
