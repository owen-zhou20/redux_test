import {INCREMENT,DECREMENT} from './constant'

// create action
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

/* function createDecrementAction (data){
    return {type:'decrement',data:data}
} */

