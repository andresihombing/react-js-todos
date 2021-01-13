import React, {Component} from 'react'
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Todos from '../screen/todos';

import detailTodos from './detailTodos';

class Header extends Component{
    render(){
        return(
            <HashRouter>            
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul class="navbar-nav">
                        <li className="nav-item-active">
                            <NavLink className="nav-link" exact to='/'>Todos</NavLink>
                        </li>                        
                    </ul>                    
                </nav>
                <div className="content">            
                    <Route exact path="/" component={Todos}/>        
                    <Route path="/detailTodos" component={detailTodos}/>
                </div>
            </HashRouter>
        )
    }
}

export default Header;