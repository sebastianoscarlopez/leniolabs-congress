import { combineReducers } from 'redux'
import membersReducers from './membersReducers'

const rootReducer = combineReducers({ membersReducers });

export default rootReducer;