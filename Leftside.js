import { Link } from 'react-router-dom';
import leftside from './left.module.css'
import arrow from './arrow.module.css'
import Subset from './Subset';
import { useContext } from 'react';
import { Leftcontext } from '../Context/Leftcontext';



const Leftside = () => {
    
    const {showsubparm, outputsubparm, islight, light, dark, link, setlink} = useContext(Leftcontext)
    const theme = islight ? light : dark
    /*****add on property actif*/
    const setactif = id => {
        setlink(link.map(link => link.id == id ? {...link, actif : true} : {...link, actif : false}))
    }
    return ( 
        <div style={{backgroundColor :theme.bg, color : theme.color }} className={leftside.leftside}>
            <div  style={{backgroundColor :theme.bg, color : theme.color }} className={leftside.container}>
                <div style={{fontFamily: 'magmawave caps'}} className={leftside.logomakeup}>
                    cma cgm
                </div>
                {/**the status information */}
               <div className={leftside.top}>
                <div  style={{backgroundColor :theme.ui, color : theme.color }} className={leftside.logocon}>
                        <div className={leftside.user}>
                            {/* <i className='fa fa-user-circle'></i> */}
                            <div className={leftside.img}></div>
                        </div>
                        <div className={leftside.personel}>
                            <div style={{fontFamily:'Questrial', fontSize:'20px', fontWeight : '500'}}>Jeune patient</div>
                            <div style={{color : '#ababab'}}>Admin</div>
                        </div>
                    </div>
               </div>
                <ul className={leftside.nav}>
                    {
                        link.map(link => {
                            return (
                                <Link key={link.id}  to={`/${link.href}`} > 
                                
                                {link.id == 5 ? <li   onClick={() =>{ setactif(link.id); outputsubparm()}}  className={link.actif  && leftside.actif } > <i className={link.font}></i> {link.hash}<i className={arrow.arrowbottom}></i> </li> : <li  onClick={() => setactif(link.id)}  className={link.actif  && leftside.actif }  > <i className={link.font}></i> {link.hash}<i className={arrow.arrowleft}></i> </li> }
                                 </Link>
                            )
                        })
                    }
               
                </ul>

                {showsubparm && <Subset  />}
                
               
            </div>
        </div>
     );
}
 
export default Leftside;