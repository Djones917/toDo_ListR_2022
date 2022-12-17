import React, { Component } from "react";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []}
    }
    render() {
        return (
            <div>
               <h1>ToDo List</h1>  
               <ul>
                 <li>todo 1</li>
               </ul>  
            </div>
        )
    }
}

export default TodoList;