import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators, Dispatch } from 'redux'
import { MainSection as MainSectionComponent } from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'
import { AppState } from '../types';


const mapStateToProps = (state: AppState) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})


const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


export const MainSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSectionComponent)

