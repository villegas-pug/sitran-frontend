import {
   REGISTRAR_PROCNAC_CARGANDO,
   REGISTRAR_PROCNAC_EXITO,
   REGISTRAR_PROCNAC_ERROR
} from 'redux/actions/procNacAction'

const initialState = {
   loading: false,
   data: [],
   error: null
}

export default function (state = initialState, { action, payload }) {
   switch (action) {
      case REGISTRAR_PROCNAC_CARGANDO:
         return { loading: true, data: [], error: null }
      case REGISTRAR_PROCNAC_EXITO:
         return { loading: false, data: payload, error: null }
      case REGISTRAR_PROCNAC_ERROR:
         return { loading: false, data: [], error: payload }
      default:
         return state
   }
}