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

    function HandleAlert() {
        Swal.fire({
            icon: 'success',
            title: '感謝購買',
            showConfirmButton: false,
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
