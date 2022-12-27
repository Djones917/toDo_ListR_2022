import React, from { Component } from "react";

class NewTodoForm extends Component {
    render() {
        return (
           <form>
             <label htmlFor="task">New Todo</label>
             <input type="text" placeholder="New Todo" id="task" />
           </form>
        )
    }
}