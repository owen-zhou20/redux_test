import {INCREMENT,DECREMENT} from '../constant'

// create action
export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})
// create async action
export const incrementAsync = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
          dispatch(increment(data))
        },time)
    }
}

/* function createDecrementAction (data){
    return {type:'decrement',data:data}
} */

