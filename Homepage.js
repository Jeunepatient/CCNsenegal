import Topright from "./Topright";
import home from './homepage.module.css'
import Mainhomepage from "./Mainhomepage";
import { useContext } from "react";
import { Leftcontext } from "../Context/Leftcontext";
import Linechart from "./Linechart";
import Piechart from "./Piechart";
import Iframemaps from "./Iframemaps";
import Lineargradient from "./Lineargradient";

// import Piechart from "./Piechart";
const Homepage = () => {
    const {islight, light, dark} = useContext(Leftcontext)
    const theme = islight ? light : dark
    return ( 
        <div className={home.home}>
            <div style={{backgroundColor :theme.bg, color : theme.color }} className={home.container}>
                {/**the right top of the homepage */}
                <Topright />
                <Mainhomepage />
                <div className={home.chart}>

                    <Linechart />
                    {/* <Lineargradient /> */}
                    <Piechart />
                   
                </div>
                {/* <Iframemaps /> */}
            </div>
        </div>
     );
}
 
export default Homepage;