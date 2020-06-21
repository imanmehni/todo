import React, { Component } from "react";
import Store from '../store/TodoStore'
import {observer} from 'mobx-react'

class TodoItems extends Component {

  render() {
    return (
      <footer>
        <label className="item-counter">{Store.todo.filter(todo=>todo.complited===false).length+' items left'}</label>
        <div className="controller">
          <button onClick={()=>{
            Store.view='all'
            Store.filterTodo()
          }
          } >All</button>
          <button onClick={()=>{
            Store.view='active'
            Store.filterTodo()
          }}>Active</button>
          <button onClick={()=>{
            Store.view='complited'
            Store.filterTodo()
            }}>Complited</button>
        </div>
        <button className={Store.todo.filter(todo=>todo.complited===true).length===0?'visibility':''}
        onClick={()=>{
          Store.todo.filter(todo=>todo.complited===true).map(todo=>Store.delete(todo.id))
        }
        }
        >Clear Complited</button>
      </footer>
    );
  }
}

export default observer(TodoItems)