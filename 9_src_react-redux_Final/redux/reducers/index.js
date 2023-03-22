/*
    combine all reducers
*/
import {combineReducers} from 'redux'
import countReducer from './count'
import personReducer from './person'

// all reducers
export default combineReducers({
    countR:countReducer,
    personR:personReducer
})

