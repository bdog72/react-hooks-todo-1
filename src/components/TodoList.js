//
//

import React from 'react';
import Todo from './Todo';

import { Paper, List, Divider } from '@material-ui/core';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => {
            return (
              <>
                <Todo
                  id={todo.id}
                  task={todo.task}
                  key={todo.id}
                  completed={todo.completed}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                {i < todos.length - 1 && <Divider />}
              </>
            );
          })}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
