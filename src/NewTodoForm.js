import React, from { Component } from "react";

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {task: ""}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evy){
    this.state({
      [evt.target.name]: evt.target.value
    });
  }
    render() {
        return (
           <form>
             <label htmlFor="task">New Todo</label>
             <input 
                type="text"
                placeholder="New Todo"
                id="task" value={this.state.task}
                onChange={this.handleChange}
             />
           </form>
        )
    }
}