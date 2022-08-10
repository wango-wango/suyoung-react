import React, { useState, useEffect }  from 'react'
import '../styles/item.scss';
const _ = require('lodash')

function OrderDetail(props) {
    const {setStep} = props;

    const [order, setOrder] = useState([]);

  //   async function getOrderFromServer() {
  //   /* get orderid去取訂單資料 */
  //   const url = 'http://localhost:3777/orderlist/' + scOrderId
  //   console.log('scOrderId', scOrderId)

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //   const response = await fetch(request)
  //   const dataRes = await response.json()
  //   console.log('訂單dataRes', dataRes)
  //   setOrder(dataRes)

  //   console.log('訂單scOrderId', scOrderId)
  //   // console.log('訂單order', order) //會是空的因為setOrder異步執行
  // }
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   getOrderFromServer()
  // }, [])

  // useEffect(() => {
  //   console.log('訂單order的變化', order)
  // }, [order])


  return (
    <>
    <h1 className="first_component_title">訂單內容</h1>
    <div className="order_detail">
        <div className="title">
          <h4>訂單編號：Shinder0125</h4>
          <div className="title_f">
            <p>
              <i className="fa-solid fa-calendar-check">
              &nbsp;&nbsp;2022/06/24 - 2022/06/26
              </i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-solid fa-user-large">&nbsp;2人</i>
            </p>
            <p className="order_totalAmont">Total:&nbsp;$51240</p>
          </div>
        </div>
        <div className="detail">
          <div className="item_detail">
            <div className="item_detail_img">
              <img src="" alt="" />
            </div>
            <div className="item_detail_text">
              <p>房型：奢華帳棚</p>
              <p>天數：2天</p>
              <p>價格：46770</p>
            </div>
          </div>
          <div className="event_detail">
            <div className="event_detail_img">
              <img src="" alt="" />
            </div>
            <div className="event_detail_text">
              <p>活動：漂流探險</p>
              <p>人數：2人</p>
              <p>價格：2000</p>
            </div>
          </div>
          <div className="food_detail">
            <div className="food_detail_img">
              <img src="" alt="" />
            </div>
            <div className="food_detail_text">
              <p>食材：超值烤肉露營組(安心豬肉) 4-6人份 </p>
              <p>數量：1組 </p>
              <p>價格：$1580</p>
            </div>
          </div>
        </div>
      </div>
      <div className="backtoHomepage">
        <button onClick={()=>{
            setStep(1)
        }}>回首頁</button>
      </div>
    </>
  )
}


export default OrderDetail
