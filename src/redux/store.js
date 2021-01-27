import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import procedimientoReducer from 'redux/reducers/procedimientoReducer'
import procNacReducer from 'redux/reducers/procNacReducer'
import tipoDocumentoReducer from 'redux/reducers/tipoDocumentoReducer'
import paisReducer from 'redux/reducers/paisReducer'
import tipoSolicitudReducer from 'redux/reducers/tipoSolicitudReducer'
import tipoTramiteReducer from 'redux/reducers/tipoTramiteReducer'
import usuarioReducer from 'redux/reducers/usuarioReducer'
import formsReducer from 'redux/reducers/formsReducer'
import thunk from 'redux-thunk'

/*» Last reducer's added... */
import lineamientoReducer from 'redux/reducers/lineamientoReducer'
import interpolReducer from 'redux/reducers/interpolReducer'


const reducers = combineReducers({
   procedimiento: procedimientoReducer,
   procNacionalizacion: procNacReducer,
   tipoDocumento: tipoDocumentoReducer,
   pais: paisReducer,
   tipoSolicitud: tipoSolicitudReducer,
   tipoTramite: tipoTramiteReducer,
   usuario: usuarioReducer,
   forms: formsReducer,
   lineamiento: lineamientoReducer,
   interpol: interpolReducer
})

export default createStore(
   reducers,
   compose(
      applyMiddleware(thunk),
      devToolsEnhancer()
   )
)