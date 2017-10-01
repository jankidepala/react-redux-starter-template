import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import createLogger from 'redux-logger';
import promise from 'redux-promise'

const store = (preloadedState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(promise, thunk, createLogger())
    )
  )
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  store.subscribe(() => {
    console.log("Store :", store.getState());
    console.log("Action fired");
  })
  //store.dispatch({type : "HOMEPAGE_LOADED", payload: 1})
  store.dispatch((dispatch) => {

  })

  return store
}

export default store
