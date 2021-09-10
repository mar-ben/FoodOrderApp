import styles from "./Input.module.css";
import React from "react";
const Input=React.forwardRef((props,ref)=>{
    
    let inputClassName=styles.input;
    if (!props.isValid) {
        inputClassName = styles.invalidInput;
        
    }
    

return <div className={inputClassName }  >
<label htmlFor={props.input.id} >{props.label}</label>
<input id={props.input.id} {...props.input} ref={ref} />
</div>

})
export default Input;