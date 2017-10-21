import React, { Component } from 'react';

export default class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    this.onCompletedTodo = this.onCompletedTodo.bind(this);
  }

  onCompletedTodo(event) {
    event.target.checked = false;

    this.props.completeTodoItem(event.target.getAttribute("id"));
  }

  render() {
    let todoItemList = null;
    if (this.props.todoItemList.length > 0) {
      todoItemList = (
        <div>
          {this.props.todoItemList.map((item, index) =>
            <div className="checkbox" key={index}>
              <label>
                <input className="check" type="checkbox" id={index} onChange={this.onCompletedTodo} />
                {item}
              </label>
            </div>
          )}
        </div>
      );
    } else {
      todoItemList = (
        <div>
          <span className="empty">...</span>
        </div>
      );
    }

    return (
      <div className="container">
        <h2>Active</h2>
        {todoItemList}
      </div>
    );
  }
}
