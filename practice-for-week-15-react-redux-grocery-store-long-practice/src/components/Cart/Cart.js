import CartItem from './CartItem';
import './Cart.css';
import { useSelector } from 'react-redux';
import { Store } from '../../index'
import { emptyCart } from "../../store/cart"

function Cart() {
  
  const cart = useSelector(state => Object.values(state.cart));
  const produce = useSelector(state => Object.values(state.produce));

  const cartItems = Object.values(cart)
    .map(item => {
      return {
        ...item,
        ...produce[item.id-1]
      };
    });

  if (!cartItems || !cartItems.length) return (
    <div className="cart">
      No items in the cart. Start selecting items to purchase.
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
      `${cartItems.map(item => `${item.count} of ${item.name}`).join('\n')}`
    );
  }

  return (
    <div className="cart">
      <ul>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit" onClick={() => Store.dispatch(emptyCart())}>Purchase</button>
      </form>
    </div>
  )
}

export default Cart;