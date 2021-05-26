import {
   OBTENER_INTERPOL_CARGANDO,
   OBTENER_INTERPOL_EXITO,
   OBTENER_INTERPOL_ERROR,
   SAVE_INTERPOL_PDF_LOADING,
   SAVE_INTERPOL_PDF_SUCCESS,
   SAVE_INTERPOL_PDF_ERROR
} from 'redux/types/interpolType'

const initialValues = {
   loading: false,
   data: [],
   error: null,
   interpolPdf: {
      loading: false,
      data: [],
      error: null,
   }
}

export default function interpolReducer(state = initialValues, { type, payload }) {
   switch (type) {
   case OBTENER_INTERPOL_CARGANDO:
      return { ...state, loading: true, data: [], error: null }
   case OBTENER_INTERPOL_EXITO:
      return { ...state, loading: false, data: payload, error: null }
   case OBTENER_INTERPOL_ERROR:
      return { ...state, loading: false, data: [], error: payload }
   case SAVE_INTERPOL_PDF_LOADING:
      return {...state, interpolPdf: {loading: true, data: [], error: null}}
   case SAVE_INTERPOL_PDF_SUCCESS:
      return {...state, interpolPdf: {loading: false, data: payload, error: null}}
   case SAVE_INTERPOL_PDF_ERROR:
      return {...state, interpolPdf: {loading: false, data: [], error: payload}}
   default:
      return state
   }
}