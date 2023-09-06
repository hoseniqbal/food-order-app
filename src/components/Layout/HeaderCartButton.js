import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CardContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = props =>{
  const cartCtx = useContext(CardContext)

  const numberOfCartItems = cartCtx.items.reduce((carNmber, item)=>{
    return carNmber+item.amount
  }, 0); 
  return(
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
};

export default HeaderCartButton;