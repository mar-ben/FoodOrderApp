
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Store/CartContextProvider";
import {useState} from "react"
function App() {

const [showCart,setShowCart]=useState('false')

const showCartModal=()=>{
  console.log('show cart modal');
  setShowCart(true);

}

const onCloseCartModal=()=>{
  console.log('onCloseCartModal');
  setShowCart(false);
} 
  return (
    <CartContextProvider> 
    <Cart display={showCart} onClose={onCloseCartModal} />
    <Header onClickCartButton={showCartModal} />
    <main>
   <Meals />
    </main>
     </CartContextProvider>
  );
}

export default App;
