import { useContext } from "react";
import { Leftcontext } from "../Context/Leftcontext";
import Item from "./Item";
import classe from './card.module.css'

const Mainhomepage = () => {
    const {article} = useContext(Leftcontext)
    return ( 
        <div className={classe.main}>
           <div className={classe.title}>New articles</div>
            <div className={classe.container}>
                {article.map(artcle => <Item key={artcle.id} item={artcle} />)}
            </div>
        </div>
     );
}
 
export default Mainhomepage;