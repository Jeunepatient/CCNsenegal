import Iframe from "react-iframe";
import classe from './iframe.module.css'
const Iframemaps = () => {
    return ( 
        <div className={classe.container}>
            <Iframe 
            url="https://youtube.com"
            width="100%"
            height="360px"
            id="map"
            className={classe.map}
            display="initial"
            position='relative'
            />
        </div>
     );
}
 
export default Iframemaps;