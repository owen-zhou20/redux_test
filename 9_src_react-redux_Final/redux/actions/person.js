import {ADD_PERSON} from '../constant'

// create person action
export const addPerson = personObj=>({type:ADD_PERSON,data:personObj})