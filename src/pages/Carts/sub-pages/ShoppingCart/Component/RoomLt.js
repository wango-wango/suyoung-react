import React, {useEffect, useState} from 'react';
import axios from "axios";



function RoomLt(props) {
    const {setStep, sum, OrderSubmit} = props;

    const [coupnId, setCoupnId] = useState();

    const handleOnChange = (event) => {
        setCoupnId({coupnNumber: event.target.value});
    };

    console.log(coupnId)

    // const getCoupn = async (coupn) => {
    //     const res = await axios.get(
    //         "http://localhost:3700/cart",
            
    //     );

    //     console.log(res);
    // };

    // const getCoupn = () => {
    //     const coupnId1 = {coupnId}
    //     axios.get(`http://localhost:3700/cart/${coupnId1}`).then(
    //         (res) => {
    //             if (res) {
    //                 console.log(res);

    //             } else {
    //                 alert("查無會員資料");
    //             }
    //         }
    //     );
    // };

    async function getCoupn () {
        const url = 'http://localhost:3700/cart/coupn'
    
        // 注意資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
    
        const response = await fetch(request)
        const data = await response.json()
        console.log('訂單dataRes', data)
        // setOrder(data)
    
        // console.log('訂單scOrderId', scOrderId)
        // // console.log('訂單order', order) //會是空的因為setOrder異步執行
        // setOrderAll(data.data)
      }
    
    //   useEffect(() => {
    //     getOrderListFromServer()
    //   }, [])

  return (
    <div className="web_component1 mb_none">
    <img
        src="/member_img/logo.svg"
        alt=""
        className="web_component1_img mb_none"
    />
    <div className="detail_price">
        <div className="first_colum">
            <p className="room_price_1">房價</p>
            <p className="room_price_2">${sum}</p>
        </div>

        <p className="none">活動</p>
        <p className="none">折扣碼：</p>
        <div className="discount_wrap">
        <input placeholder="輸入折扣碼" type="text" className="discount__wrap__input field__error" maxLength={15}  onChange={handleOnChange}></input>
        <button className="discount__wrap__apply" onClick={getCoupn}>套用</button>
        </div>
        <div className="second_colum">
            <p className="totalPrice">合計</p>
            <p className="">${sum}</p>
        </div>
        <div className="checkoutbtn">
            <button className="stillBuy" onClick={()=>{window.location.href="http://localhost:3777/shuyoung/Booking"}}>繼續訂房</button>
            <button className="checkOut" onClick={OrderSubmit}>結帳</button>
        </div>
    </div>
</div>
  )
}



export default RoomLt
