import React, { Component } from "react";
import { observer } from "mobx-react";
import Store from '../store/TodoStore'
export default observer(
  class TodoItems extends Component {
    onToggle = () => {
      this.props.todo.toggle();
      Store.filterTodo()
    }
    onDelete=id=>{
      Store.delete(id)
    }
    render() {
      const { todo } = this.props;
      return (
        <li className={todo.complited ? "complited" : " "}>
          <div className="view">
            <div class="round">
              <input
                onChange={this.onToggle}
                type="checkbox"
                id={todo.id}
                checked={todo.complited}
              />
              <label for={todo.id}></label>
            </div>
      <label>{todo.title}</label>
            <button onClick={()=>this.onDelete(todo.id)}>X</button>
          </div>
        </li>
      );
    }
  },
);
