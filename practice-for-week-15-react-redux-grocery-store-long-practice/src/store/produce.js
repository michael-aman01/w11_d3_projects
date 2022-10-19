import produceData from '../mockData/produce.json'

export default function produceReducer(state={},action){
    switch(action.type){

        case POPULATE:
            Object.freeze(state)
            let newState = {...state}
            action.produce.forEach((item) =>{
                newState[item.id] = item
            })
            return newState

        default:
            return state;
    }
}

const POPULATE = "produce/POPULATE"

export function populateProduce(){
    return (
        {
            type: POPULATE,
            produce: produceData
        }
    )
}