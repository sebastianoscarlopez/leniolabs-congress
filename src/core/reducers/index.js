import { combineReducers } from 'redux'
import membersContainerReducers from './membersContainerReducers'

const rootReducer = combineReducers({ membersContainerReducers });

export default rootReducer;