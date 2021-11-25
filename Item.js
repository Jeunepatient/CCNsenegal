import card from './card.module.css'
const Item = ({item}) => {
    return ( 

        <div className={card.card} style={{backgroundColor : item.color, color: item.ink}}>
            <i className='fa fa-ship'></i>
            <div style={{fontFamily : 'magmawave caps', fontSize : '28px'}}>{item.num}</div>
            <div style={{fontFamily : 'magmawave caps', marginTop: '5px', fontSize : '20px'}}>{item.name}</div>
        </div>
     );
}
 
export default Item;