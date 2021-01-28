import {
   OBTENER_INTERPOL_CARGANDO,
   OBTENER_INTERPOL_EXITO,
   OBTENER_INTERPOL_ERROR
} from 'redux/types/interpolType'

const initialValues = {
   loading: false,
   data: [],
   error: null
}

export default function interpolReducer(state = initialValues, { type, payload }) {
   switch (type) {
      case OBTENER_INTERPOL_CARGANDO:
         return { loading: true, data: [], error: null }
      case OBTENER_INTERPOL_EXITO:
         return { loading: false, data: payload, error: null }
      case OBTENER_INTERPOL_ERROR:
         return { loading: false, data: [], error: payload }
      default:
         return state
   }
}