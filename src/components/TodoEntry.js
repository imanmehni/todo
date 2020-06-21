import React,{Component} from 'react'
import Store from '../store/TodoStore'
export default class TodoEntry extends Component{
    state={
        value:''
    }
handelKayDown(event){
    if(event.keyCode!==13 || this.state.value.trim()==='')
    {
        return;
    }    
        event.preventDefault();
        Store.addTodo(this.state.value)
        this.setState({value:''})
}
    render(){
        return(
            <header>
            <h1>Todo</h1>
            <input type="text" 
            value={this.state.value}
            onChange={event=>{
                this.setState({value:event.target.value})
            }}
            onKeyDown={event=>this.handelKayDown(event)}
            />
          </header>
        )
    }
}