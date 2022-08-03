import SuMapLeftNav from './SuMapLeftNav'
import SuMapRight from './SuMapRight'
import React, { useState } from 'react'
import Modal from './Modal/Modal'
import CarouselMap from './CarouselMap'
import CarouselMapDesc from './CarouselMapDesc'

const SuMapContent = (props) => {

    const [displayModal, setDisplayModal] = useState(false)
  // 記錄索引值，從0開始
  const [contentIndex, setContentIndex] = useState(0)
  const [mapPicIndex,setmapPicIndex] =useState(0)

  const modalOpen = (i) => {
    // 這裡設定content要抓取的資料索引值
    setContentIndex(i)
    setmapPicIndex(i)
    setDisplayModal(true)
    // setStep(i);
  }

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
        <React.Fragment>
          <div className='popup_window'>
            <CarouselMap step={mapPicIndex}/>
            {/* TODO:輪播墻的內容要如何使用json檔呈現？本身是套件好像不能擅自更動？ */}
            {/* 這裡呈現資料，content與contentIndex會找到對應的 */}
            {/* {content[contentIndex]} */}
            <div className='popup_content_right'>
              <CarouselMapDesc step={contentIndex} />
              {/*TODO:這邊是要怎麼去呈現CarouselMapDesc的內容（隨著內容點擊切換component的資料） step={step} ？ */}
            </div>
            <button className='popup_exit_btn' onClick={modalClose}>
              X
            </button>
          </div>
        </React.Fragment>
      </Modal>
    </div>
</div>

}

export default SuMapContent