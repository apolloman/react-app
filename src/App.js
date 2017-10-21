import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTodo from './ListTodo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is Simle Todo List</h1>
        <ListTodo />
      </div>
    );
  }
}

export default App;
