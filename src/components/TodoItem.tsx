import React, { useState, useCallback } from 'react'
import classnames from 'classnames'
import { TodoTextInput } from './TodoTextInput'
import { Todo } from '../types';

const noop = () => {}

export interface TodoItemProps {
    todo: Todo;
    editTodo?(id: number, text: string): void;
    deleteTodo?(id: number): void;
    completeTodo?(id: number): void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, completeTodo = noop, deleteTodo = noop, editTodo = noop }) => {
    const [editing, setEditing] = useState(false);

    const handleDoubleClick = useCallback(() => {
        setEditing(true)
    }, [])
    
    const handleSave = useCallback((id, text) => {
        if (text.length === 0) {
          deleteTodo(id)
        } else {
          editTodo(id, text)
        }
        setEditing(false)
    }, [])

      
    let element
    
    if (editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={editing}
                       onSave={(text) => handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: editing
      })}>
        {element}
      </li>
    )
}
