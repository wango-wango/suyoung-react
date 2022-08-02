import React, { useState, useEffect } from 'react'


function RoomInfo(props) {

    const { updateQty } = props
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

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('roomItem')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.sid === item.sid)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('roomItem', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    updateQty()
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
                        <button class="del_btn">
                        刪除
                        </button>
                        </div>
                    </div>
                </div>
  )
    })}
  </>
  )

  return (
    <>
      {displayItems}
    </>
  )
}

export default RoomInfo

