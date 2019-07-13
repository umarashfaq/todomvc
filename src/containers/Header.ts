import { connect } from 'react-redux'
import { Header as HeadeComponent } from '../components/Header'
import { addTodo } from '../actions'

export const Header = connect(null, { addTodo })(HeadeComponent)
