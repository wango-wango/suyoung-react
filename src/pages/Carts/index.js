import React, { useState, useEffect } from "react";
import axios from "axios";
import AddOn from "./sub-pages/ShoppingCart/Component/AddOn";
import Process from "./components/Process";
import ShoppingCart from "./sub-pages/ShoppingCart"
import CreditCard from "./sub-pages/CreditCard";
import OrderDetail from "./sub-pages/OrderDetail";
import './styles/item.scss';

function Index(props) {
    const maxSteps = 3

    const [step, setStep] = useState(1)
  
    const [errors, setErrors] = useState([])
  
    // 狀態的範例，都集中在這裡接收
    const [cartData, setCartData] = useState([])

    const components = [ShoppingCart,CreditCard,OrderDetail];

    const BlockComponent = components[step - 1];

    const progressNames = ['商品資訊', '付款方式', '購物完成' ];



    return<>
     <div className="first_component">
        <Process 
        maxSteps={maxSteps}
        step={step}
        progressNames={progressNames}
        />
        <BlockComponent setStep={setStep}/>
    </div>
    {step === 1 ?  <AddOn/> : null}
    </>
    


// function Index(props) {
//     const { setBackground } = useBackground();

//     useEffect(() => {
//         setBackground("bg1.svg");
//     }, []);

//     return <div>Carts</div>;
}

export default Index;
