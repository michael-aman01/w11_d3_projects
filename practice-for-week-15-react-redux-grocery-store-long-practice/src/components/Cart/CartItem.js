import { useState, useEffect } from 'react';
import { removeFromCart, addToCart, reduceCount} from '../../store/cart';
import {Store} from '../../index'
function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => Store.dispatch(addToCart(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => Store.dispatch(reduceCount(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
           
            Store.dispatch(removeFromCart(item.id))
          } 
          }

        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;