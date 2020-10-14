//
//

import React, { useEffect } from 'react';
import useTodoState from '../hooks/useTodoState';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import '../styles/TodoApp.css';

function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Play Games', completed: false }];
  // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  // useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar position='static' style={{ height: '64px' }} color='primary'>
        <Toolbar>
          <Typography className='todoApp__typography' color='inherit'>
            TODOS WITH HOOKS
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
