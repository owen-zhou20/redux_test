import {legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// all reducers
const allReducer = combineReducers({
    countR:countReducer,
    personR:personReducer
})
//export default createStore(allReducer,applyMiddleware(thunk))
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))