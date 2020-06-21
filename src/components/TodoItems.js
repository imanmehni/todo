import React, { Component } from "react";
import Item from "./TodoItem";
import Store from '../store/TodoStore'
import {observer} from 'mobx-react'
 class TodoItems extends Component {

  render() {

    return (
      <section>
        <div className="todo-list">
          <ul>
            {
              Store.todoView.map(todo=>{
                return(<Item todo={todo} />)
              })
            }
          </ul>
        </div>
      </section>
    );
  }
}
const todoStore=observer(TodoItems)
export default todoStore