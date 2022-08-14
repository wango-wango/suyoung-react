import React, { useState, useEffect } from 'react'
import 'animate.css';
import { motion } from "framer-motion";
const _ = require('lodash');
const Swal = require('sweetalert2')


function RoomInfo(props) {

    const { setSum,  updateQty } = props
    const [mycart, setMycart] = useState([])
    const [mycartDisplay, setMycartDisplay] = useState([])

  
    function getCartFromLocalStorage() {
      const newCart = localStorage.getItem('roomItem') || '[]'
  
      // updateQty()
  
      console.log(JSON.parse(newCart))
      setMycart(JSON.parse(newCart))
    }
    useEffect(() => {
      getCartFromLocalStorage()
    }, [])

    // componentDidUpdate
    useEffect(() => {
    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].roomSid
      )
      console.log(index)
      //有的話就數量+1
      if (index !== -1) {
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

    // 製作按下X按鈕執行delItem函式刪除localStorage單筆資料
    const delItem = (item) => {
    // 先複製原有的購物車內容
    const currentCart = JSON.parse(localStorage.getItem('roomItem')) || []

    // 找尋是否有此筆item.id的對應資料
    const index = currentCart.findIndex((v) => v.room_id === item.room_id)

    if (index > -1) {
      // 找到的話就透過splice來移除array中的那個物件
      // 再更新至localStorage cart之中並且更新Mycart
      currentCart.splice(index, 1)
      localStorage.setItem('roomItem', JSON.stringify(currentCart))
      setMycart(currentCart)

      }
    }

    function DeleteCartItem(item) {
      Swal.fire({
          title: '您確定要刪除此商品?',
          text: "不再多考慮一下嘛!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '是的，刪除!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
        }).then((result) => {
          console.log(result.isConfirmed)
          if (result.isConfirmed) {
            delItem(item);
            Swal.fire(
              '已刪除!',
              '您的商品已刪除！',
              'success'
            )
          }
        })
    }
    
    // 計算總價用的函式
    const sum = (items) => {
      let total = 0
      for (let i = 0; i < items.length; i++) {
        total += items[i].totalPrice
      }
      setSum(total);
      return total
    }


    const displayItems = (<>
      {mycartDisplay.map((item,index)=>{
        return (
          <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={item}
            >   
            
                <div className="room_info">
                    <div className="room_pic">
                        <img
                            src={`/room_imgs/${item.room_folder}/${item.room_image}`}
                            alt=""
                        />
                    </div>
                    <div className="room_detail"
                    >
                        <p>房型：{item.room_name}</p>
                        <p>入住：{item.startDate}</p>
                        <p>退房：{item.endDate}</p>
                        <p>成人：{item.adults}</p>
                        <p>兒童：{item.kids}</p>
                        <p>天數：{item.perNight}</p>
                        <div className="amount_and_del">
                            <p>價格：${item.totalPrice}</p>
                        <button className="del_btn" onClick={()=>{DeleteCartItem(item)}}>
                        刪除
                        </button>
                        </div>
                    </div>
                </div>
                </motion.div> 
  )
    })}
  </>
  )

  const ScPriceRow = (
    <>
      {/* 總金額列 */}
      <div className="w-100 priceRow px-0">
        <div className=" col-10 bdBottom d-flex flex-column align-items-center py-5 mx-auto">
          <div className="w-100 d-flex jus justify-content-end my-2 px-0">
            <div className="totalPriceFont col-3 px-0">總計</div>
            <div className="totalPriceFont-med col-3 px-0">
              NT<span>{sum(mycartDisplay)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {displayItems}
    </>
  )
}

export default RoomInfo

