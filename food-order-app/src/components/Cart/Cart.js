import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../Store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  
    const cartCtx=useContext(CartContext);
    console.log('display : ' + props.display)
    
    const removeCartItemHandler = (id) => {
        
        cartCtx.removeItem(id)
    }
    const addCartItemHandler = (item) => {
        
        cartCtx.addItem(item)
    }
    const cartItems = (
        <ul className = { styles['cart-items']} >
        {
                cartCtx.items.map(item => <CartItem id={item.id}
                    onRemove={removeCartItemHandler.bind(null,item.id)}
                    onAdd={addCartItemHandler.bind(null,item)}
                    name={item.name}
                    price={item.price}
                    amount={item.amount} />)}
        </ul>
    );
    const totalCartAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const onClickCloseButtonHandler=(event)=>{
    props.onClose()
}
if( props.display===true){
return (
  
<Modal>
{cartItems}
<div className={styles.total}>
<span> Total Amount </span>
            <span>{totalCartAmount } </span>
</div>
<div className={styles.actions}>
<button className={styles['button--alt']} onClick={onClickCloseButtonHandler} > Close </button>
<button className={styles.button} > Order </button>
</div>
    </Modal>
)

}else{
    return <div></div>;
}


};

export default Cart;
