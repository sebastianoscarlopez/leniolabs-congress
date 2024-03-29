import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}