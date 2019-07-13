import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as TodoActions from '../actions'
import { TodoList } from '../components/TodoList'
import { getVisibleTodos } from '../selectors'
import { AppState } from '../types';

const mapStateToProps = (state: AppState) => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
