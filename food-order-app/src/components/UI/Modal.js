import styles from "./Modal.module.css"
import { Fragment } from "react"
import  ReactDOM  from "react-dom"

const Modal=(props)=>{

const backdropElement=document.getElementById("backdrop");

return (
<Fragment> 
{ReactDOM.createPortal(<div className={styles.backdrop}></div>,backdropElement)}
{ReactDOM.createPortal(<div className={styles.modal}>
<div className={styles.content} >{props.children} </div>
</div>,backdropElement)}
</Fragment>
);

}
export default Modal;