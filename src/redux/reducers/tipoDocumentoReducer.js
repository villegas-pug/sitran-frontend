import {
   OBTENER_TIPODOCUMENTO_CARGANDO,
   OBTENER_TIPODOCUMENTO_EXITO,
   OBTENER_TIPODOCUMENTO_ERROR
} from 'redux/actions/tipoDocumentoAction'

const initialState = {
   loading: false,
   data: [],
   error: null
}

export default function (state = initialState, { type, payload }) {
   switch (type) {
      case OBTENER_TIPODOCUMENTO_CARGANDO:
         return { loading: true, data: [], error: null }
      case OBTENER_TIPODOCUMENTO_EXITO:
         return { loading: false, data: payload, error: null }
      case OBTENER_TIPODOCUMENTO_ERROR:
         return { loading: false, data: [], error: payload }
      default:
         return state
   }
}