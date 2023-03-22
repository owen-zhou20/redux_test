import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


//export default createStore(allReducer,applyMiddleware(thunk))
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))