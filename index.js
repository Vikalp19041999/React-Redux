const redux = require('redux')
const createStore = redux.createStore

//*An Action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//*An action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'creating multiple reducers'
    }
}

//*Implementing Reducers as (previousState, action)=>newState*//
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state

        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 2
            }
    }
}

//*Creating the store
const store = createStore(Reducers)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
