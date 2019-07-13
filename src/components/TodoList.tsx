import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'
import { Todo } from '../types';

export interface TodoListProps {
    filteredTodos: Todo[];
    actions: object;
  }

export const TodoList: React.FC<TodoListProps> = ({ filteredTodos, actions }) => (
  <ul className="todo-list">
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </ul>
)
