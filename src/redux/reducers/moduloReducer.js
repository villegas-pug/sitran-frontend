import {
   OBTENER_MODULO_CARGANDO,
   OBTENER_MODULO_ERROR,
   OBTENER_MODULO_EXITO
} from 'redux/types/moduloType'

const initialState = {
   loading: false,
   data: [],
   error: null
}

export default function moduloReducer(state = initialState, { type, payload }) {
   switch (type) {
   case OBTENER_MODULO_CARGANDO:
      return { loading: true, data: [], error: null }
   case OBTENER_MODULO_ERROR:
      return { loading: false, data: payload, error: null }
   case OBTENER_MODULO_EXITO:
      return { loading: false, data: [], error: payload }
   default:
      return state
   }
}