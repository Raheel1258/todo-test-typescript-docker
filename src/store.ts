import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { TodoReducer } from './redux/todo'

const rootReducer = combineReducers({
  todo: TodoReducer,
})

function configureStore() {
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore)
  const store = finalCreateStore(rootReducer)
  return store
}

const store = configureStore()

export default store
