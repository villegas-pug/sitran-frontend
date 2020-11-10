import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import procedimientoReducer from 'redux/reducers/procedimientoReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
   procedimiento: procedimientoReducer
})

export default createStore(
   reducers,
   compose(
      applyMiddleware(thunk),
      devToolsEnhancer()
   )
)