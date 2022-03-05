import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import react from 'react';


class App extends react.Component {
  state = {
    todos: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 1, label: 'Drink tea', important: false, done: false },
      { id: 1, label: 'Drink vodka', important: false, done: false },
    ]
  }

  render() {
    return (
      <div className="todo-app">
  
        <AppHeader toDo={1} done={3} />
  
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={this.state.todos} />
  
      </div>
    );
  }

  
};

export default App;