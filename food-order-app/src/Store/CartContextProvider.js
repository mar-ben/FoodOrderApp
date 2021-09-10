import { useReducer } from "react";
import CartContext from "./CartContext";

  const defaultCartState = {
        items: [],
        totalAmount :0
    }
const cartReducer = (state, action) => {
    console.log('cartReducer');
    if (action.type === 'ADD') {
        debugger;
        let updatedItems = [...state.items];
        const index = state.items.findIndex(item => item.id === action.item.id);
        let existingCartItem = state.items[index];
       
        if (existingCartItem) {
             let updatedCartItem = {
            ...existingCartItem,
            amount:existingCartItem.amount + action.item.amount
        }
            updatedItems[index] = updatedCartItem;
        } else {
            updatedItems.push(action.item);
        }
        
        const updatedTotalAmount = updatedItems.reduce((total, item) => total + (item.price * item.amount), 0);
        return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }   
    }
    if (action.type === 'REMOVE') {
        debugger;
        const index = state.items.findIndex(item => item.id === action.id);
        let existingCartItem = state.items[index];
        let updatedItems =[...state.items];
        let updatedCartItem = {
            ...existingCartItem,
            amount:existingCartItem.amount-1
        }
        if (updatedCartItem.amount === 0) {
            updatedItems=[...state.items.filter(item=>item.id!==action.id)]
        } else {
            updatedItems[index] = updatedCartItem;
        }
          const updatedTotalAmount = updatedItems.reduce((total, item) => total + (item.price * item.amount), 0);
       return {
            items: updatedItems,
            totalAmount:updatedTotalAmount
        }
        }
      
       
       
    }



const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addItemToCartHandler = (item) => {
        console.log('inside additemToCartHandler' + JSON.stringify(item));
        dispatchCartAction({type:'ADD',item});
    }
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };

    return (<CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>)

}
export default CartContextProvider;