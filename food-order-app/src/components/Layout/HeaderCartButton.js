import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/CartContext";
const HeaderCartButton=(props)=>{

    const [buttonHightlighted, setButtonHighlighted] = useState(false);

const onClickHeaderButtonHandler=(event)=>{
console.log('on Click header Button Handler')
props.onClick(event);
}
    const cartCtx = useContext(CartContext);
    const cartItemCount=cartCtx.items.reduce((total,item) => { return total+ item.amount }, 0);
    const buttonStyle=` ${styles.button} ${buttonHightlighted? styles.buttonhighlighted:''} `
    useEffect(() => {
        setButtonHighlighted(true);
        const timer=setTimeout(() => { setButtonHighlighted(false) }, 300)
        return () => {
            clearTimeout(timer)
        }

    },[cartCtx.items])
return <button className={buttonStyle} onClick={onClickHeaderButtonHandler} > 
<span className={styles.icon}><CartIcon/></span>
<span>Your Cart</span>
    <span className={styles.badge}> { cartItemCount}</span>

</button> 

}
export default HeaderCartButton;