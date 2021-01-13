import React, {Component} from 'react'
import '../App.css'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as todosAction from '../redux/actions/todosAction'
import Config from '../config'
import { Link } from 'react-router-dom'

class Todos extends Component{
  constructor(){
    super()
    this.state={
    }
  }

  componentDidMount(){
    this.getList()
  }

  getList() {
    const {actions} = this.props        
    let urlFetch = Config.API_BASE_URL + `/todos`
    fetch(urlFetch,
        {
            method: 'GET',
        }).then((response) => response.json()).then(async (responseJson) => {            
            actions.changeTodos(responseJson)
        }).catch((error) => {
            console.log(error)
        });
  }

  changeTodos(item){      
    const {actions} = this.props
    actions.changeDetailTodos(item)
  }

  render(){
    const {todos} = this.props    
    return(
      <div className="App">
        <div className="container">
          <p className='title'>Todos</p>                              
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Detail</th>                
              </tr>
            </thead>
            <tbody>              
              {                    
                todos.map((item, index) => {
                    return(
                      <tr>
                        <td>{item.title}</td>
                        <td>
                            <Link to={`/detailTodos`} >
                            <button 
                                className="btn btn-primary btn-sm"
                                onClick={() =>{
                                    this.changeTodos(item)
                                }}
                                >Detail</button>
                            </Link>
                        </td>                        
                      </tr>
                    )
                })
              }              
            </tbody>
          </table>
        </div>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  todos: state.todos.todos_data
})

const ActionCreators = Object.assign(
  {},
  todosAction
)

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchProps)(Todos)
