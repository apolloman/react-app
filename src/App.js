import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompletedItems from './completed-items.js';
import TodoInput from './todo-input.js';
import TodoItems from './todo-items.js';


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {todoItemList: [], completedItemList: []};

  this.saveTodoItem = this.saveTodoItem.bind(this);
  this.completeTodoItem = this.completeTodoItem.bind(this);
  this.uncompleteItem = this.uncompleteItem.bind(this);
}

saveTodoItem(todoItemText) {
  var newList = this.state.todoItemList.slice();
  newList.unshift(todoItemText);

  this.setState({todoItemList: newList});
}

completeTodoItem(id) {
  var newTodoItemList = this.state.todoItemList.slice();
  var newCompletedItemList = this.state.completedItemList.slice();

  newCompletedItemList.unshift(newTodoItemList.splice(id, 1));

  this.setState({todoItemList: newTodoItemList, completedItemList: newCompletedItemList});
}

uncompleteItem(id) {
  var newTodoItemList = this.state.todoItemList.slice();
  var newCompletedItemList = this.state.completedItemList.slice();

  newTodoItemList.unshift(newCompletedItemList.splice(id, 1));

  this.setState({todoItemList: newTodoItemList, completedItemList: newCompletedItemList});
}

render() {
  const todoItemList = this.state.todoItemList
  const completedItemList = this.state.completedItemList
  return(
    <div className="App">
      <h1>React ToDo App</h1>
      <TodoInput
        saveTodoItem={this.saveTodoItem} />
      <TodoItems
        todoItemList={todoItemList}
        completeTodoItem={this.completeTodoItem} />
      <CompletedItems
        completedItemList={completedItemList}
        uncompleteItem={this.uncompleteItem} />
    </div>
  );
  }
}

export default App;
