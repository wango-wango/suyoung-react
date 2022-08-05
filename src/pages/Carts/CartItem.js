import React, { useState, useEffect } from "react";
import axios from "axios";
import AddOn from "./sub-pages/ShoppingCart/Component/AddOn";
import Process from "./components/Process";
import ShoppingCart from "./sub-pages/ShoppingCart"
import CreditCard from "./sub-pages/CreditCard";
import OrderDetail from "./sub-pages/OrderDetail";
import './styles/item.scss';

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



    return<>
     <div className="first_component">
        <Process 
        maxSteps={maxSteps}
        step={step}
        progressNames={progressNames}
        />
        <BlockComponent setStep={setStep} roomItem={roomItem} sum={sum} setSum={setSum} setInputs={setInputs}
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
