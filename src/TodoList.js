import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [{ task: "Walk the bird"}, { task: "punch the boss"}]
        };
        this.create = this.create.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {
        const todos = this.state.todos.map(todo => {
           return <Todo task={todo.task}/>
        });
        return (
            <div>
               <h1>ToDo List</h1>  
               <NewTodoForm />
               <ul>{todos}</ul>  
            </div>
        )
    }
}

export default TodoList;