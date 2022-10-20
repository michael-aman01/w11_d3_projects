import { addToCart } from "../../store/cart";
import { likeProduce } from "../../store/produce";
import { Store } from "../../index";

function ProduceDetails({ produce }) {
  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => Store.dispatch(likeProduce(produce.id))}
      
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => Store.dispatch(addToCart(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;