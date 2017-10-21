import React, { Component } from 'react';

export default class CompletedItems extends React.Component {
  constructor(props) {
    super(props);

    this.onUncompletedTodo = this.onUncompletedTodo.bind(this);
  }

  onUncompletedTodo(event) {
    event.target.checked = true;

    this.props.uncompleteItem(event.target.getAttribute("id"));
  }

  render() {
    let completedItemList = null;
    if (this.props.completedItemList.length > 0) {
      completedItemList = (
        <div>
          {this.props.completedItemList.map((item, index) =>
            <div className="checkbox" key={index}>
              <label>
                <input className="check" type="checkbox" id={index} onChange={this.onUncompletedTodo} checked/>
                <strike>{item}</strike>
              </label>
            </div>
          )}
        </div>
      );
    } else {
      completedItemList = (
        <div>
          <span className="empty">...</span>
        </div>
      );
    }

    return (
      <div className="container">
        <h2>Completed</h2>
        {completedItemList}
      </div>
    );
  }
}
