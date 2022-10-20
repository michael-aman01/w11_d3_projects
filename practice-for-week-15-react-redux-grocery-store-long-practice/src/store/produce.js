import produceData from '../mockData/produce.json'
import { Store } from '../../src/index'


const POPULATE = "produce/POPULATE"
export function populateProduce(){
    return (
        {
            type: POPULATE,
            produce: produceData
        }
    )
}

const LIKE = "produce/LIKE"
export function likeProduce(itemId){
    return (
        {
            type: LIKE,
            itemId
        }
    )
}

export default function produceReducer(state={},action){
    Object.freeze(state)
    let newState = {...state}

    switch(action.type){

        case POPULATE:
            action.produce.forEach((item) =>{
                newState[item.id] = item
            })
            return newState

        case LIKE:
            if(newState[action.itemId].liked === false){
                newState[action.itemId].liked = true
            }else{
                newState[action.itemId].liked = false
            }
            return newState
        
        default:
            return state;
    }
}


export const getAllProduce = (state) => Object.values(state.produce)
