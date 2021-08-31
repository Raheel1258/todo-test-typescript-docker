import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
// import { CounterReducer } from './redux/counter'
import { TodoReducer } from './redux/todo'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  // count: CounterReducer,
  todo: TodoReducer,
})

function configureStore() {
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore)
  const store = finalCreateStore(rootReducer)
  return store
}

const store = configureStore()

export default store
