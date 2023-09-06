import { useReducer } from "react";
import CardContext from "./cart-context";

const defaultCartState = {
  items:[],
  totalAmount:0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedItems = state.items.concat(action.item);
    const UpdatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    return{
      items:updatedItems,
      totalAmount: UpdatedTotalAmount
    }
  }
  return defaultCartState
};




const CartProvider = props => {{
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item:item})
  }

  const removeItemFormCartHandler = id =>{
    dispatchCartAction({type:'REMOVE', id:id})
  }
  const cartContext = {
    items: cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFormCartHandler
  }

  return (<CardContext.Provider value={cartContext}>
    {props.children}
  </CardContext.Provider>)
}}


export default CartProvider;