import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import procedimientoReducer from 'redux/reducers/procedimientoReducer'
import procNacReducer from 'redux/reducers/procNacReducer'
import tipoDocumentoReducer from 'redux/reducers/tipoDocumentoReducer'
import paisReducer from 'redux/reducers/paisReducer'
import tipoSolicitudReducer from 'redux/reducers/tipoSolicitudReducer'
import tipoTramiteReducer from 'redux/reducers/tipoTramiteReducer'
import usuarioReducer from 'redux/reducers/usuarioReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
   procedimiento: procedimientoReducer,
   procNacionalizacion: procNacReducer,
   tipoDocumento: tipoDocumentoReducer,
   pais: paisReducer,
   tipoSolicitud: tipoSolicitudReducer,
   tipoTramite: tipoTramiteReducer,
   usuario: usuarioReducer
})

export default createStore(
   reducers,
   compose(
      applyMiddleware(thunk),
      devToolsEnhancer()
   )
)