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
          <div className='window_des'>
          <div className='des_picture_wangmei1'>
            <img src="http://localhost:3777/map_imgs/wangmei1.png" alt="" />
            </div>
          </div>
          <div className='window_des'>
          <div className='des_picture_wangmei2'>
          <img src="http://localhost:3777/map_imgs/wangmei2.png" alt="" />
          </div>
          </div>
          <div className='window_des'>
          <div className='des_picture_wangmei3'>
          <img src="http://localhost:3777/map_imgs/wangmei3.png" alt="" />
          </div>
          </div>
            <button className='popup_exit_btn' onClick={()=>{window.location.href="http://localhost:3777/shuyoung/SuMap"}}>
              X
            </button>
          </div>
        </React.Fragment>
      </Modal>
    </div>
</div>

}

export default SuMapBeautyContent