import {
   OBTENER_PROCEDIMIENTO_CARGANDO,
   OBTENER_PROCEDIMIENTO_EXITO,
   OBTENER_PROCEDIMIENTO_ERROR
} from 'redux/actions/procedimientoActions'

const initialState = {
   loading: false,
   data: [],
   error: null
}

export default function (state = initialState, { type, payload }) {
   switch (type) {
      case OBTENER_PROCEDIMIENTO_CARGANDO:
         return { loading: true, data: [], error: null }
      case OBTENER_PROCEDIMIENTO_EXITO:
         return { loading: false, data: payload, error: null }
      case OBTENER_PROCEDIMIENTO_ERROR:
         return { loading: false, data: [], error: payload }
      default:
         return state
   }
}