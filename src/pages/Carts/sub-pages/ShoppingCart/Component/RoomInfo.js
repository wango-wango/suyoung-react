import React, { useState, useEffect } from 'react'


function RoomInfo(props) {

    const { updateQty } = props
    const [mycart, setMycart] = useState([])
    const [mycartDisplay, setMycartDisplay] = useState([])
  
    function getCartFromLocalStorage() {
      const newCart = localStorage.getItem('cart') || '[]'
  
    //   updateQty()
  
      console.log(JSON.parse(newCart))
      setMycart(JSON.parse(newCart))
    }
    useEffect(() => {
      getCartFromLocalStorage()
    }, [])
  return (
            <div className="w70">
                <div class="room_info">
                    <div class="room_pic">
                        <img
                            src="/room_imgs/beauty/roomA1.jpeg"
                            alt=""
                        />
                    </div>
                    <div class="room_detail">
                        <p>房型：奢華帳篷</p>
                        <p>入住：2022/06/24</p>
                        <p>退房：2022/06/26</p>
                        <p>人數： 2 人</p>
                        <p>天數：兩晚</p>
                        <div class="amount_and_del">
                            <p>價格：$47660</p>
                        <button class="del_btn">
                        刪除
                        </button>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default RoomInfo

