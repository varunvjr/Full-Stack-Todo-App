import React,{Component} from "react";
import Todo from "./Todo";
import {connect} from "react-redux";
import { addTodo,removeTodo,getTodos } from "./actionCreator";
import {Route} from "react-router-dom";
import NewTodoList from "./NewTodoList";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
        this.state={
            task:""
        }
    }
    componentDidMount(){
        this.props.getTodos();
    }
    handleAdd(val){
        this.props.addTodo(val);

    }
    removeTodo(id){
       this.props.removeTodo(id);
    }
    render(){
        const todo= this.props.todos.map((todo)=>(
            <Todo 
            key={todo._id} 
            task={todo.task}
            removeTodo={this.removeTodo.bind(this,todo._id)}/>
        ));

        return(
            <div>
            <Route path="/todos/new" component={(props)=>(
                <NewTodoList {...props} handleSubmit={this.handleAdd}/>
            )}/>
            <Route exact path="/todos" component={()=><div><ul>{todo}</ul></div>}/>
            </div>
           
        )
    }
}
function mapStatetoprops(reduxState){
    return{
        todos:reduxState.todos
    }

}
export default connect(mapStatetoprops,{addTodo,removeTodo,getTodos})(TodoList);