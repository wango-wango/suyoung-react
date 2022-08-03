import React, {useState} from 'react'
import AddOn from './Component/AddOn';
import RoomInfo from './Component/RoomInfo';
import RoomLt from './Component/RoomLt';
import RoomMo from './Component/RoomMo';
import '../../styles/item.scss';

function Index(props) {
    const {setStep, cartQty, setCartQty, updateQty} = props;
    const [sum, setSum] = useState();

  return (
    <>
    <h1 className="first_component_title">SHOPPING CART</h1>
    <div className="room_info_and_web_component1">
    <div className="w100">
    <RoomInfo  
            updateQty={updateQty}
            cartQty={cartQty}
            setCartQty={setCartQty}
            setSum={setSum}
            />
    </div>
       
        <RoomLt setStep={setStep} sum={sum}/>
        <RoomMo setStep={setStep} sum={sum}/>  
    </div>
    </>
  )
}


export default Index

