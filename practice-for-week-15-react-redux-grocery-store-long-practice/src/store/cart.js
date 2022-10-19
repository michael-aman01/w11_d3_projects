import Cart from "../components/Cart/Cart"
import produceData from '../mockData/produce.json'

const ADD_TO_CART = 'cart/ADD_TO_CART'
// Action Creators
export function addToCart(itemId) {
    return (
        {
            type: ADD_TO_CART,
            itemId
        }
    )
}

//Reducer
export const cartReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case ADD_TO_CART:
            let newState = { ...state };
            if(newState[action.itemId]){
                newState[action.itemId].count += 1
            } else {
                newState[action.itemId] = {
                    id: action.itemId,
                    count: 1
                }
            }
            return newState;
        default:
            return state;
    }
}
