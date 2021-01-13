import React, {Component} from 'react'
import '../App.css'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as todosAction from '../redux/actions/todosAction'
import Config from '../config'

class Todos extends Component{
  constructor(){
    super()
    this.state={
    }
  }

  componentDidMount(){
      console.log(this.props.detail)
    this.getList()
  }

  getList() {
    const {actions, detail} = this.props        
    let urlFetch = Config.API_BASE_URL + `/todos/${detail.id}`
    fetch(urlFetch,
        {
            method: 'GET',
        }).then((response) => response.json()).then(async (responseJson) => {            
            actions.changeDetailTodos(responseJson)
        }).catch((error) => {
            console.log(error)
        });
  }
  

  render(){
    const {detail} = this.props    
    return(
      <div className="App">
        <div className="container">
          <p className='title'>Todos</p>                              
          <table class="table table-striped">            
            <tbody>    
                <tr>
                    <td>Title </td>
                    <td>: </td>
                    <td>{detail.title}</td>
                </tr>
                <tr>
                    <td>User Id </td>
                    <td>: </td>
                    <td>{detail.userId}</td>
                </tr>
                <tr>
                    <td>Status </td>
                    <td>: </td>
                    <td>{detail.completed ? 'completed' : 'not completed'}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  todos: state.todos.todos_data,
  detail: state.todos.todos_detail
})

const ActionCreators = Object.assign(
  {},
  todosAction
)

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(Todos)
