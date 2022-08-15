import React, { useState } from 'react'
import AddOn from './Component/AddOn'
import RoomInfo from './Component/RoomInfo'
import RoomLt from './Component/RoomLt'
import RoomMo from './Component/RoomMo'
import ActInfo from './Component/ActInfo'
import '../../styles/item.scss'
import { set } from 'lodash'
const _ = require('lodash')

function Index(props) {
  const {
    setStep,
    roomItem,
    sum,
    setSum,
    actSum,
    setActSum,
    orderItemsStr,
    HandleAlertBuy,
    HandleAlert,
    discountSum,
    setdiscountSum,
  } = props

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
          <RoomInfo setSum={setSum} orderItemsStr={orderItemsStr} />
          <ActInfo setActSum={setActSum} orderItemsStr={orderItemsStr} />
        </div>

        <RoomLt
          setStep={setStep}
          sum={sum}
          setSum={setSum}
          actSum={actSum}
          setActSum={setActSum}
          OrderSubmit={OrderSubmit}
          discountSum={discountSum}
          setdiscountSum={setdiscountSum}
        />
        <RoomMo
          setStep={setStep}
          sum={sum}
          setSum={setSum}
          actSum={actSum}
          setActSum={setActSum}
          OrderSubmit={OrderSubmit}
          discountSum={discountSum}
          setdiscountSum={setdiscountSum}
        />
      </div>
    </>
  )
}

export default Index
