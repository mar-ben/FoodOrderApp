import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/CartContext";
import { useContext } from "react";
const MealItem=(props)=>{
    const price = `$${props.price.toFixed(2)}`;

   const cartCtx = useContext(CartContext);
    

    const addtoCartHandler = (amountVal) => {
        //debugger;
        cartCtx.addItem({ id: props.id,name: props.name, price: props.price, amount: Number(amountVal) })
       
    }


    return <li className={styles.meal}>
    <div> 
    <div ><h3>{props.name} </h3></div>
    <div className={styles.description}> {props.description}</div>
    <div className={styles.price}>{price}</div>
</div>
<div>
            <MealItemForm key={props.id}
                id = { props.id } onAddToCart={addtoCartHandler}
            />
</div>
    </li>
}
export default MealItem