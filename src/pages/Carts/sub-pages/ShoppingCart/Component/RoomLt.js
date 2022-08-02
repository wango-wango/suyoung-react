import React from 'react'



function RoomLt(props) {
    const {setStep} = props;
  return (
    <div class="web_component1 mb_none">
    <img
        src="/member_img/logo.svg"
        alt=""
        class="web_component1_img mb_none"
    />
    <div class="detail_price">
        <div class="first_colum">
            <p class="room_price_1">房價</p>
            <p class="room_price_2">$47660</p>
        </div>

        <p class="none">活動</p>
        <p class="none">食材</p>
        <p class="totalPrice">合計</p>
        <div class="checkoutbtn">
            <button class="stillBuy">繼續購物</button>
            <button class="checkOut" onClick={()=>{setStep(2)}}>結帳</button>
        </div>
    </div>
</div>
  )
}



export default RoomLt
