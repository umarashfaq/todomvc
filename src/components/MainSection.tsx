import React from 'react'
import PropTypes from 'prop-types'
import { Footer } from './Footer'
import { VisibleTodoList } from '../containers/VisibleTodoList'

export interface MainSectionProps {
    todosCount: number;
    completedCount: number;
    actions: {
        completeAllTodos(): void;
        clearCompleted(): void;
    }
}

export const MainSection: React.FC<MainSectionProps> = ({ todosCount, completedCount, actions }) =>
  (
    <section className="main">
      {
        !!todosCount && 
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  )