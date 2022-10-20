import Cart from "../components/Cart/Cart"
import produceData from '../mockData/produce.json'


// Action Creators
const ADD_TO_CART = 'cart/ADD_TO_CART'
export function addToCart(itemId) {
    return (
        {
            type: ADD_TO_CART,
            itemId
        }
    )
}

const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
export function removeFromCart(itemId){
    return (
        {
            type: REMOVE_FROM_CART,
            itemId
        }
    )
}

const REDUCE_COUNT = 'cart/REDUCE_COUNT'
export function reduceCount(itemId){
    return (
        {
            type: REDUCE_COUNT,
            itemId
        }
    )
}


const EMPTY_CART = 'cart/EMPTY_CART'
export function emptyCart(){
    return (
        {
            type: EMPTY_CART
        }
    )
}

//Reducer
export const cartReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = { ...state }

    switch(action.type) {

        
        case ADD_TO_CART:
            if(newState[action.itemId]){
                newState[action.itemId].count += 1
            } else {
                newState[action.itemId] = {
                    id: action.itemId,
                    count: 1
                }
            }
            return newState;

        case REMOVE_FROM_CART:
            delete newState[action.itemId]
            return newState


        case REDUCE_COUNT:
            if(newState[action.itemId].count > 1){
                newState[action.itemId].count -= 1
            } else {
                delete newState[action.itemId]
            }
            return newState;
        
        case EMPTY_CART:
            newState = {}
            return newState
        
        default:
            return state;
    }
}
