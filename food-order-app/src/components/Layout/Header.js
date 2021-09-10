
import styles from "./Header.module.css";
import {Fragment} from "react";
import mealsImage from "../../assets/meals.jpeg"

import HeaderCartButton from "./HeaderCartButton";


const Header=(props)=>{


const onClickCartButtonHandler=(event)=>{
 console.log('header :'+ onClickCartButtonHandler)
 props.onClickCartButton();
}


return <Fragment>
    <header className={styles.header}>
    <h1> React Meals </h1> 
    <HeaderCartButton onClick={onClickCartButtonHandler} />
    </header>
    <div className={styles['main-image']}>
    <img src={mealsImage} alt="Meals" />
    </div>
    </Fragment>;


}

export default Header;