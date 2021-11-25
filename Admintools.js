import Togglebutton from "./Togglebutton";
import tool from './admintool.module.css'
import classes from './left.module.css'
const Admintools = () => {
    return ( 
        <div  className={tool.tool}>
            <div className={tool.container}>
                <div className={tool.notif}>
                    <i className='fa fa-bell'></i>
                    <div className={tool.bell}>8</div>
                </div>
                <div className={classes.img}>  </div>
                <Togglebutton />
            </div>
        </div>
     );
}
 
export default Admintools;