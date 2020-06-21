import {observable,action,decorate} from 'mobx';
import TodoModel from './TodoModel'
class Store{
    todo=[]
    todoView=[]
    view='all'
    lastId=0
    addTodo(title){
        this.todo.push(new TodoModel(this,title,false,this.lastId++))
        this.filterTodo()
    }
    delete(id){
        this.todo=this.todo.filter(todo=>todo.id!==id)
        this.filterTodo()
    }
    filterTodo(){
        if(this.view==='all')
        this.todoView=this.todo.sort((a,b)=>{return a.complited-b.complited})
        if(this.view==='active')
        this.todoView=this.todo.filter(todo=>todo.complited===false)
        if(this.view==='complited')
        this.todoView=this.todo.filter(todo=>todo.complited===true)
    }

}

decorate(Store,{
    todo:observable,
    todoView:observable,
    view: observable,
    addTodo:action
})
const store=new Store();

export default store;