import {observable,decorate} from 'mobx'
export default class TodoModel{
    store
    id
    title
    complited
    constructor(store,title,complited,id) {
        this.store= store
        this.title= title
        this.complited= complited
        this.id= id
    }
    toggle(){
        this.complited= !this.complited
    }

}
decorate(TodoModel,{
    title:observable,
    complited: observable
})