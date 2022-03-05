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
      { id: 1, label: 'Make awesom day', important: false, done: false },
      { id: 2, label: 'Drink tea', important: false, done: false },
      { id: 3, label: 'Drink vodka', important: false, done: true },
      { id: 4, label: 'learn react', important: false, done: false },
      { id: 5, label: 'bag fixing', important: false, done: false },
    ],
    filter: "all  "
  }

  onDelete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      return {
        todos: [...prev, ...next]
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

      const prev = oldState.todos.slice(0, idx)
      const current = oldState.todos[idx]
      const next = oldState.todos.slice(idx + 1)

      return {
        todos: [...prev, {...current, important: !current.important}, ...next]
      }
    })
  }

  onToggleFilter = (status) => {
    this.setState({
      filter: status
    })
  }

  onStatusFilter = (todos, status) => {
    if (status == "active"){
      return todos.filter((item) => item.done == false)
    } else if (status == "done") {
      return todos.filter((item) => item.done == true)
    } else {
      return todos
    }
  }

  render() {
    const filterStatus = this.onStatusFilter(this.state.todos, this.state.filter)

    return (
      <div className="todo-app">
  
        <AppHeader toDo={1} done={3} />
  
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter onToggleFilter={this.onToggleFilter} />
        </div>
  
        <TodoList 

          onDelete={this.onDelete} 
          onToggleImportant={this.onToggleImportant}
          todos={filterStatus}

        />
  
      </div>
    );
  }

  
};

export default App;