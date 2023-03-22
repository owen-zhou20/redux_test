import {ADD_PERSON} from '../constant'

// create person action
export const createAddPersonAction = personObj=>({type:ADD_PERSON,data:personObj})