import React, { useState, useEffect } from "react";
import axios from "axios";
import AddOn from "./sub-pages/ShoppingCart/Component/AddOn";
import Process from "./components/Process";
import ShoppingCart from "./sub-pages/ShoppingCart"
import CreditCard from "./sub-pages/CreditCard";
import OrderDetail from "./sub-pages/OrderDetail";
import './styles/item.scss';
import 'animate.css';
const _ = require('lodash');
const Swal = require('sweetalert2')

function CartItem(props) {
    const maxSteps = 3

    const [step, setStep] = useState(1)

    const [roomItem, setRoomItem] = useState(() => {
        const roomItem = localStorage.getItem('roomItem');
        return roomItem ? JSON.parse(roomItem) : [];
    }, [])

    const [sum, setSum] = useState();

    const components = [ShoppingCart,CreditCard,OrderDetail];

    const BlockComponent = components[step - 1];

    const progressNames = ['商品資訊', '付款方式', '購物完成' ];

    const [inputs, setInputs] = useState({
        name:'', //信用卡號碼
        number:'', //信用卡持卡人姓名
        expiry:'', //信用卡有效日期
        cvc:'', //信用卡安全碼
      })

    const Swal = require('sweetalert2')  
    
    // 從localStorage取出購物車資訊，往子女元件傳遞
    const orderItems = localStorage.getItem('roomItem') || 0
    const orderItemsStr = JSON.parse(orderItems)  

    const [errors, setErrors] = useState([])

    const [scOrderId, setScOrderId] = useState(0) //訂單編號

    // async function addOrderToSever(e) {
    //     const orderId = +new Date()
    //     // setInputs({...inputs,
    //     //   [inputs.orderIdNum]: orderId,})
    //     setScOrderId(orderId)
    //     let data = {
    //       orderItems: [],
    //     }
    //     for (let item of orderItemsStr) {
    //       const tempObj = {
    //         orderId: orderId,
    //         orderItemsId: item.id,
    //         checkPrice: item.price,
    //         checkQty: item.amount,
    //         checkSubtotal: item.price * item.amount,
    //       }
    //       data.orderItems.push(tempObj)
    //     }
    //     //  `orderId`, `username`, `receiverName`, `receiverPhone`, `orderPrice`, `shippingType`, `shippingPrice`, `conStore`, `conAddress`, `homeAddress`, `paymentType`, `created_at`, `updated_at`
    //     data.orderInfo = {
    //       orderId: orderId,
    //       // orderId: inputs.orderIdNum,
    //       username: 'jessica',
    //       receiverName: inputs.scname,
    //       receiverPhone: inputs.phone,
    //       orderPrice: sum(orderItemsStr) + shipPrice,
    //       shippingType: shipType,
    //       shippingPrice: shipPrice,
    //       // conStore: seletedConCity+seletedConStore,
    //       conStore: inputs.conType+inputs.conCity+inputs.conStore,
    //       conAddress: selectedConAddress,
    //       homeAddress: (country > -1  && township>-1)&& (postcodes[country][township]+countries[country]+townships[country][township]+inputs.homeAddress) ,
    //       paymentType: paymentWay,
    //     }
    
    //     // 連接的伺服器資料網址
    //     const url = 'http://localhost:4567/cart/product/order/add'
    
    //     // 注意資料格式要設定，伺服器才知道是json格式
    //     // 轉成json檔傳到伺服器
    //     const request = new Request(url, {
    //       method: 'POST',
    //       body: JSON.stringify(data),
    //       headers: new Headers({
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       }),
    //     })
    //     console.log('JSON', JSON.stringify(data))
    //     // console.log('JSON parse',JSON.parse(JSON.stringify(data)).orderItems)
    
    //     const response = await fetch(request)
    //     const dataRes = await response.json()
    
    //     console.log('伺服器回傳的json資料', dataRes)
    //   }

    function HandleAlert() {
        Swal.fire({
            icon: 'success',
            title: '感謝購買',
            showConfirmButton: true,
            timer: 3000
          })
      }
      function HandleAlertBuy() {
        Swal.fire({
            icon: 'error',
            title: '錯誤',
            text: '請先將商品加入購物車!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            timer: 2000
          })
      }
      function HandleAlertData() {
        Swal.fire({
            icon: 'error',
            title: '錯誤',
            text: '有資料沒填喔～!',
            timer: 2000
          })
      }
       
    // 處理表單送出
  const handleSubmit = async (e) => {
    const newErrors = []
    if(props.state){
        if (!inputs.number.trim()) {
          newErrors.push('number')
          setErrors(newErrors)
        }
        if (!inputs.name.trim()) {
          newErrors.push('name')
          setErrors(newErrors)
        }
        if (!inputs.expiry.trim()) {
          newErrors.push('expiry')
          setErrors(newErrors)
        }
        if (!inputs.cvc.trim()) {
          newErrors.push('cvc')
          setErrors(newErrors)
        }
      }
      if(newErrors.length !== 0){
        HandleAlertData()
      }
    if (!_.isEmpty(orderItemsStr) && newErrors.length === 0 ) {
      // 購物車內有商品
        HandleAlert();
        //   await addOrderToSever();
      localStorage.removeItem('roomItem');
      setStep(3)
    }
    if (_.isEmpty(orderItemsStr)) {
      // 如果購物車內沒有商品的話
    HandleAlertBuy()
    setStep(1)
    }
}

    return<>
     <div className="first_component">
        <Process 
        maxSteps={maxSteps}
        step={step}
        progressNames={progressNames}
        />
        <BlockComponent 
        setStep={setStep} 
        roomItem={roomItem} 
        sum={sum} 
        setSum={setSum} 
        setInputs={setInputs}
        inputs={inputs}
        handleSubmit={handleSubmit}
        orderItemsStr={orderItemsStr}   
        HandleAlertBuy={ HandleAlertBuy}
        HandleAlert={HandleAlert}
        />
    </div>
    {/* {step === 1 ?  <AddOn/> : null} */}
    </>
    


// function Index(props) {
//     const { setBackground } = useBackground();

//     useEffect(() => {
//         setBackground("bg1.svg");
//     }, []);

//     return <div>Carts</div>;
}

export default CartItem;
