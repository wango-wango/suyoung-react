import SuMapLeftNav from './SuMapLeftNav'
import SuMapRight from './SuMapRight'
import React, { useState } from 'react'
import Modal from './Modal/Modal'
import CarouselMap from './CarouselMap'
import CarouselMapDesc from './CarouselMapDesc'

const SuMapBeautyContent = (props) => {

    const [displayModal, setDisplayModal] = useState(true)
// 預設是開啟的

  const modalClose = () => {
    setDisplayModal(true)
  }

return <div className="svg_box">
    <div className="map_content">
        <div className="map_content_left">
        <SuMapLeftNav />
        </div>
        <div className="map_content_right">
        <SuMapRight />
        </div>
        <Modal show={displayModal} modalClose={modalClose}>
        {/* 輪播墻外掛https://reactjsexample.com/easy-to-use-responsive-and-customizable-carousel-component-for-react/  */}
        <React.Fragment>
          <div className='popup_window'>
            {/* 之後再做新的分頁去做切換？ */}
            {/* TODO:輪播墻的內容要如何使用json檔呈現？本身是套件好像不能擅自更動？ */}

            <div className='popup_content_right'>

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

export default SuMapBeautyContent