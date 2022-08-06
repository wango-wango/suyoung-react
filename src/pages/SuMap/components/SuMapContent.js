import SuMapLeftNav from './SuMapLeftNav'
import SuMapRight from './SuMapRight'
import React, { useState } from 'react'
import Modal from './Modal/Modal'
import CarouselMap from './CarouselMap'
import CarouselMapDesc from './CarouselMapDesc'
import MapCont from './MapCont'
import MapBeauty from './MapBeauty'
import MapYourself from './MapYourself'
import MapFamily from './MapFamily'
import MapVan from './MapVan'
import MapFood from './MapFood'
import MapStar from './MapStar'
import MapAct from './MapAct'

const SuMapContent = (props) => {

    const [displayModal, setDisplayModal] = useState(false)
  // 記錄索引值，從0開始
  const [contentIndex, setContentIndex] = useState(0)
  const [mapPicIndex,setmapPicIndex] =useState(0)

  const [step, setStep] = useState(0)
  // 動態元件
  const components = [[MapCont,MapFood],[MapCont,MapBeauty],[MapCont,MapYourself],[MapCont,MapFamily],[MapCont,MapVan],[MapCont,MapStar],[MapCont,MapAct]];

  const BlockComponent = components[contentIndex][step];

// const components = [MapCont, MapBeauty]
// const BlockComponent = components[step]

  const modalOpen = (i) => {
    // 這裡設定content要抓取的資料索引值
    setContentIndex(i)
    setmapPicIndex(i)
    setDisplayModal(true)
    // setStep(i);
  }
console.log(modalOpen.setmapPicIndex)


  const modalClose = () => {
    setDisplayModal(false)
  }




return <div className="svg_box">
    <div className="map_content">
        <div className="map_content_left">
        <SuMapLeftNav modalOpen={modalOpen} />
        </div>
        <div className="map_content_right">
        <SuMapRight modalOpen={modalOpen}/>
        </div>
        <Modal show={displayModal} modalClose={modalClose}>
        {/* 輪播墻外掛https://reactjsexample.com/easy-to-use-responsive-and-customizable-carousel-component-for-react/  */}
        <BlockComponent setDisplayModal={setDisplayModal} mapPicIndex={mapPicIndex} contentIndex={contentIndex} setStep={setStep}/>
      </Modal>
    </div>
</div>

}

export default SuMapContent