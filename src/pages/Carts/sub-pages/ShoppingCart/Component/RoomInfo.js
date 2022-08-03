import React, { useState, useEffect } from 'react'


function RoomInfo(props) {

    const { updateQty, setSum } = props
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
        (value) => value.sid === mycart[i].sid
      )
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
    const index = currentCart.findIndex((v) => v.sid === item.sid)

    if (index > -1) {
      // 找到的話就透過splice來移除array中的那個物件
      // 再更新至localStorage cart之中並且更新Mycart
      currentCart.splice(index, 1)
      localStorage.setItem('roomItem', JSON.stringify(currentCart))
      setMycart(currentCart)

    }
  }

    // 計算總價用的函式
    const sum = (items) => {
      let total = 0
      for (let i = 0; i < items.length; i++) {
        total += items[i].room_price
      }
      setSum(total);
      return total
    }


  const displayItems = (<>
    {mycartDisplay.map((item,index)=>{
      return (
                <div class="room_info"  key={item.id}>
                    <div class="room_pic">
                        <img
                            src={`/room_imgs/camp/${item.room_image}`}
                            alt=""
                        />
                    </div>
                    <div class="room_detail"
                    >
                        <p>房型：{item.room_name}</p>
                        <p>入住：2022/06/24</p>
                        <p>退房：2022/06/26</p>
                        <p>人數：{item.person_num}</p>
                        <p>天數：兩晚</p>
                        <div class="amount_and_del">
                            <p>價格：${item.room_price}</p>
                        <button class="del_btn" onClick={() => {
                delItem(item)
              }}>
                        刪除
                        </button>
                        </div>
                    </div>
                </div>
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

