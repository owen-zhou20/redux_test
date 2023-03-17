import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        console.log(personObj)
    }

    render() {
        return (
        <div>
            <h2>Person component</h2>
            <input ref={c=> this.nameNode = c}type="text" placeholder='enter a name'></input>
            <input ref={c=> this.ageNode = c}type="text" placeholder='enter a age'></input>
            <button onClick={this.addPerson}>Add this person</button>
            <ul>
                <li>Name1--age1</li>
                <li>Name2--age2</li>
                <li>Name3--age3</li>
            </ul>
        </div>
        )
    }
}
