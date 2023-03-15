
const initState = 0 //init
export default function countReducer(preState=initState,action){
    //if(preState===undefined) preState = 0  //init
    const {type,data} = action
    switch (type){
        case 'increment':
            return preState + data  //add
        case 'decrement':
            return preState - data  //subtract
        default: 
            return preState //init
        
    }

}