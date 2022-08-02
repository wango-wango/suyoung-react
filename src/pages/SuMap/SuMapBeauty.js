// import '../styles/footer.scss'
// import '../styles/navbar.scss'
// import '../css/su_map.css'
import './SuMap.css'


import SuMapNav from "./components/SuMapNav";
// import SuMapContent from "./components/SuMapContent";
import SuMapFooter from "./components/SuMapFooter";
import SuMapBeautyContent from './components/SuMapBeautyContent';

function  SuMap(){
    return(
        <div>
        <SuMapNav/>
    <SuMapBeautyContent/>
        <SuMapFooter/>
        
        </div>
    )
}

export default SuMap