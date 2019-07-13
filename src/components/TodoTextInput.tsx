import React, { Component, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export interface TodoTextInputProps {
    onSave(text: string): void,
    text?: string,
    placeholder?: string,
    editing?: boolean,
    newTodo?: boolean
}

export const TodoTextInput: React.FC<TodoTextInputProps> = ({ onSave, newTodo, text: textProp, editing, placeholder }) => {
    const [text, setText] = useState(textProp || '')

    const handleSubmit = useCallback(e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
          onSave(text)
          if (newTodo) {
            setText('')
          }
        }
    }, [])
    
    const handleChange = useCallback(e => {
        setText(e.target.value)
    }, [])
    
    const handleBlur = useCallback(e => {
        if (!newTodo) {
          onSave(e.target.value)
        }
    }, [])

    return (
        <input className={
          classnames({
            edit: editing,
            'new-todo': newTodo
          })}
          type="text"
          placeholder={placeholder}
          autoFocus={true}
          value={text}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleSubmit} />
      )
}
