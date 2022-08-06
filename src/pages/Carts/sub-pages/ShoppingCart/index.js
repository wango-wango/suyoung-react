import React, {useState} from 'react'
import AddOn from './Component/AddOn';
import RoomInfo from './Component/RoomInfo';
import RoomLt from './Component/RoomLt';
import RoomMo from './Component/RoomMo';
import '../../styles/item.scss';
const _ = require('lodash');

function Index(props) {
    const {setStep, roomItem, sum, setSum, orderItemsStr, HandleAlertBuy} = props;

    // 處理訂單送出
    const OrderSubmit = async (e) => {
    if (!_.isEmpty(orderItemsStr)) {
      // 購物車內有商品
      setStep(2)
    }
    if (_.isEmpty(orderItemsStr)) {
      // 如果購物車內沒有商品的話
    HandleAlertBuy()
    setStep(1)
    }
}

  return (
    <>
    <h1 className="first_component_title">SHOPPING CART</h1>
    <div className="room_info_and_web_component1">
    <div className="w100">
    <RoomInfo  
            setSum={setSum}
            />
    </div>
       
        <RoomLt setStep={setStep} sum={sum} OrderSubmit={OrderSubmit}/>
        <RoomMo setStep={setStep} sum={sum} OrderSubmit={OrderSubmit}/> 
    </div>
    </>
  )
}


export default Index

