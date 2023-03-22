import {ADD_PERSON} from '../constant'

// init person array
const initState = [{id:'001',name:'Tom',age:18}]
export default function personRdeucer(perState=initState,action){
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:  // add a person
           return [data,...perState]
        default:
            return perState
    }

}