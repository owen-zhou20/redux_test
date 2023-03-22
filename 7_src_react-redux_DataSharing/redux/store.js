import {legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

// all reducers
const allReducer = combineReducers({
    countR:countReducer,
    personR:personReducer
})
export default createStore(allReducer,applyMiddleware(thunk))