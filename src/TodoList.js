import React, { Component } from "react";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: [{task:"Walk the bird"}, {task:"punch the boss"}]}
    }
    render() {
        return (
            <div>
               <h1>ToDo List</h1>  
               <ul>
                 <li>todo 1</li>
                 <li>todo 2</li>
               </ul>  
            </div>
        )
    }
}

export default TodoList;