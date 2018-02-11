//Input element component

import React, { Component } from 'react';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoItemText: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({todoItemText: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.todoItemText.length != 0) {
      this.props.saveTodoItem(this.state.todoItemText);
      this.setState({todoItemText: ""});
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" placeholder="Add new cool item"
            value={this.state.todoItemText} onChange={this.handleChange} />
          <button type="submit" className="btn-1">Push new thing</button>
        </form>
      </div>
    );
  }
}
