import { connect, MapStateToProps } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { Link as Link, LinkProps } from '../components/Link'
import { AppState } from '../types';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState, ownProps: LinkProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LinkProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter || ''))
  }
})

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
