import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {

/*     componentDidMount(){
        //call render if redux state changed
        store.subscribe(()=>{
            this.setState({})
        })
    } */

    increment = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))
        
    }

    decrement = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }

    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        const count = store.getState()
        if(count % 2 !== 0 ){
            store.dispatch(createIncrementAction(value*1))
        }
        
    }

    incrementAsync = ()=>{
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1))
        },500)
    }
        
    render() {
        return (
            <div>
                <h1>Total: {store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick ={this.increment}>+</button>&nbsp;
                <button onClick ={this.decrement}>-</button>&nbsp;
                <button onClick ={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick ={this.incrementAsync}>increment async</button>&nbsp;
            </div>
        )
    }
}
