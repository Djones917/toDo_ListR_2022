import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {task: ""}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt){
    this.state({
      [evt.target.name]: evt.target.value
    });
  }
    render() {
        return (
           <form onSubmit={this.handle.Submit}>
             <label htmlFor="task">New Todo</label>
             <input 
                type="text"
                placeholder="New Todo"
                id="task"
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
             />
             <button>Add Todo</button>
           </form>
        )
    }
}

export default NewTodoForm;