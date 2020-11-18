import {
   OBTENER_USUARIO_CARGANDO,
   OBTENER_USUARIO_EXITO,
   OBTENER_USUARIO_ERROR
} from 'redux/actions/usuarioAction'

const initialState = {
   loading: false,
   data: [],
   error: null
}

export default function usuarioReducer(state = initialState, { type, payload }) {
   switch (type) {
      case OBTENER_USUARIO_CARGANDO:
         return { loading: true, data: [], error: null }
      case OBTENER_USUARIO_EXITO:
         return { loading: false, data: payload, error: null }
      case OBTENER_USUARIO_ERROR:
         return { loading: false, data: [], error: payload }
      default:
         return state
   }
}