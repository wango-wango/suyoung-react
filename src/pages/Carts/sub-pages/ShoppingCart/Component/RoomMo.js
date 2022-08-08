import React from 'react'

function RoomMo(props) {
    const {setStep, sum, OrderSubmit} = props;
  return (
    <div className="second_component web_none">
    <div className="detail_price">
        <div className="first_colum">
            <p className="room_price_1">房價</p>
            <p className="room_price_2">${sum}</p>
        </div>

        <p className="none">活動</p>
        <p className="none">食材</p>
        <p>折扣碼</p>
        <p className="totalPrice">合計</p>
        <div className="checkoutbtn">
            <button className="stillBuy">繼續購物</button>
            <button className="checkOut" onClick={OrderSubmit} >結帳</button>
        </div>
    </div>
</div>
  )
}


export default RoomMo
