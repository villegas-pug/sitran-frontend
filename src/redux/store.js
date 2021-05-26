import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import moduloReducer from 'redux/reducers/moduloReducer'
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
import tipoOperativoReducer from 'redux/reducers/tipoOperativoReducer'
import empresaReducer from 'redux/reducers/empresaReducer'
import operativoReducer from 'redux/reducers/operativoReducer'
import distritoReducer from 'redux/reducers/distritoReducer'
import tipoInfraccionReducer from 'redux/reducers/tipoInfraccionReducer'
import produccionReducer from 'redux/reducers/produccionReducer'

/*» Manage status of the step's sub-module's...  */
import stagesReducer from 'redux/reducers/stagesReducer'

const reducers = combineReducers({
   modulo: moduloReducer,
   procNacionalizacion: procNacReducer,
   tipoDocumento: tipoDocumentoReducer,
   pais: paisReducer,
   tipoSolicitud: tipoSolicitudReducer,
   tipoTramite: tipoTramiteReducer,
   usuario: usuarioReducer,
   forms: formsReducer,
   lineamiento: lineamientoReducer,
   interpol: interpolReducer,
   tipoOperativo: tipoOperativoReducer,
   empresa: empresaReducer,
   operativo: operativoReducer,
   distrito: distritoReducer,
   tipoInfraccion: tipoInfraccionReducer,
   produccion: produccionReducer,

   stages: stagesReducer,
})

export default createStore(
   reducers,
   /* applyMiddleware(thunk) */
   compose(
      applyMiddleware(thunk),
      devToolsEnhancer()
   )
)