import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const personObj = {id:nanoid(),name,age}
        this.props.addAPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
        <div>
            <h2>Person component. The count in count component is: {this.props.count}</h2>
            <input ref={c=> this.nameNode = c}type="text" placeholder='enter a name'></input>
            <input ref={c=> this.ageNode = c}type="text" placeholder='enter a age'></input>
            <button onClick={this.addPerson}>Add this person</button>
            <ul>
                {
                    this.props.personArr.map((p)=>{
                        return <li key={p.id}>{p.name}--{p.age}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default connect(
    state => ({
        personArr:state.personR,
        count:state.countR
    }),
    {addAPerson:addPerson}
)(Person)
