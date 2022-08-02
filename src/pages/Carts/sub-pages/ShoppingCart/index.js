import React from 'react'
import AddOn from './Component/AddOn';
import RoomInfo from './Component/RoomInfo';
import RoomLt from './Component/RoomLt';
import RoomMo from './Component/RoomMo';
import '../../styles/item.scss';

const room = [
  {
      "sid": 10,
      "room_name": "木製屋頂區",
      "room_price": 1500,
      "room_type_id": 4,
      "person_num": 6,
      "room_image": "C1.jpeg",
      "recommend": 1,
      "create_at": "2009-12-09T16:00:00.000Z",
      "quantity": 10
  },
  {
      "sid": 9,
      "room_name": "搭棚遮雨區",
      "room_price": 1200,
      "room_type_id": 4,
      "person_num": 6,
      "room_image": "B1 .jpeg",
      "recommend": 0,
      "create_at": "2009-12-14T16:00:00.000Z",
      "quantity": 2
  },
  {
      "sid": 3,
      "room_name": "印第安帳",
      "room_price": 20800,
      "room_type_id": 1,
      "person_num": 8,
      "room_image": "roomC1.jpeg",
      "recommend": 0,
      "create_at": "2014-12-11T16:00:00.000Z",
      "quantity": 2
  }
]

const roomString = JSON.stringify(room);

localStorage.setItem('roomItem', roomString);

function Index(props) {
    const {setStep, cartQty, setCartQty, updateQty} = props;
  return (
    <>
    <h1 className="first_component_title">SHOPPING CART</h1>
    <div className="room_info_and_web_component1">
    <div className="w100">
    <RoomInfo  
            updateQty={updateQty}
            cartQty={cartQty}
            setCartQty={setCartQty}/>
    </div>
       
        <RoomLt setStep={setStep}/>
        <RoomMo setStep={setStep}/>  
    </div>
    </>
  )
}


export default Index

