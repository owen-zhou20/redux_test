import {INCREMENT,DECREMENT} from '../constant'

// create action
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
// create async action
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
          dispatch(createIncrementAction(data))
        },time)
    }
}

/* function createDecrementAction (data){
    return {type:'decrement',data:data}
} */

