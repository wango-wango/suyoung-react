import React from 'react'

function RoomMo(props) {
    const {setStep, sum, OrderSubmit} = props;
  return (
    <div class="second_component web_none">
    <div class="detail_price">
        <div class="first_colum">
            <p class="room_price_1">房價</p>
            <p class="room_price_2">${sum}</p>
        </div>

        <p class="none">活動</p>
        <p class="none">食材</p>
        <p>折扣碼</p>
        <p class="totalPrice">合計</p>
        <div class="checkoutbtn">
            <button class="stillBuy">繼續購物</button>
            <button class="checkOut" onClick={OrderSubmit} >結帳</button>
        </div>
    </div>
</div>
  )
}


export default RoomMo
