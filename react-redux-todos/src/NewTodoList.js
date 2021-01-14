import React,{Component} from "react";

class NewTodoList extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            task:""
        }

    }
    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state.task)
        e.target.reset();
        this.props.history.push("/todos");
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label for="task">Enter the task</label>
            <input type="text" name="task" id="task" onChange={this.handleChange}></input>
            <button>Add a Todo!!!</button>
            </form>
            </div>
        )
    }
}
export default NewTodoList;