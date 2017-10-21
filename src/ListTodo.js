import React, { Component } from 'react';

class ListTodo extends React.Component {
  render(){
    return(
      <div className="container">
         <div className="header">
            <form className="flex-form">
               <input placeholder="Add Cool Items Here" />
               <button type="submit">Add Item To List</button>
            </form>
         </div>
      </div>
    );
  }
}

export default ListTodo;
