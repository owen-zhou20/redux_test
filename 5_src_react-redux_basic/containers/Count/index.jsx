import CountUI from '../../components/Count' // UI component
import {connect} from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// return to UI component
function mapStateToProps (state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        add:(number)=>{dispatch(createIncrementAction(number))},
        sub:(number)=>{dispatch(createDecrementAction(number))},
        addAsync:(number,time)=>{dispatch(createIncrementAsyncAction(number,time))}
    }
}
    
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)


