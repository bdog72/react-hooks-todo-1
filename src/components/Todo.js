//
//

import React from 'react';
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

import { Checkbox } from '@material-ui/core';
import '../styles/Todo.css';

import useToggleState from '../hooks/useToggleState';
import { Delete, Edit } from '@material-ui/icons';
import EditTodoForm from './EditTodoForm';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            className='todo__checkbox'
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <Delete className='todo__delete' />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <Edit className='todo__edit' />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
