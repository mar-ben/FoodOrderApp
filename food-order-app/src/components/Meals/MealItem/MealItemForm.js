import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useState,useRef } from "react";

const MealItemForm = (props) => {
  const inputRef = useRef()
  const[isformValid,setformValid]=useState(true);
  const addToCartButtonHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value === 0 ||
        inputRef.current.value <= 0 ||
        inputRef.current.value === '' ||
        inputRef.current.value>5) {
      setformValid(false);
      return;
    }
    console.log(props);
    
    props.onAddToCart(inputRef.current.value);

  }
  return (
    <form className={styles.form}
    onSubmit={ addToCartButtonHandler }>
      <Input
        label="Amount"
        isValid={isformValid}
         ref={inputRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add </button>
    </form>
  );
};
export default MealItemForm;
