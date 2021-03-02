import {
   INPUT_CHANGE,
   INPUTS_RESET,
   SAVE_OPERATIVO_LOADING,
   SAVE_OPERATIVO_SUCCESS,
   SAVE_OPERATIVO_ERROR,
   LIST_OPERATIVO_LOADING,
   LIST_OPERATIVO_SUCCESS,
   LIST_OPERATIVO_ERROR,
} from 'redux/types/operativoType'

const initialValues = {
   loading: false,
   data: [],
   error: null,
   inputValues: {
      fechaOperativo: '',
      numeroOperativo: '',
      tipoOperativo: '',
      numeroInforme: '',
      entidadSolicitaOperativo: '',
      distrito: '',
      nombres: '',
      tipoDocumento: '',
      numeroDocumento: '',
      pais: '',
      sexo: '',
      infraccion: '',
      tipoInfraccion: '',
      disposicionPNP: '',
      situacionMigratoria: '',
      refugiado: '',
      conMenor: '',
      datosMenor: '',
      observaciones: '',
      file: null
   }
}

export default function operativoReducer(state = initialValues, { type, payload }) {
   switch (type) {
      case INPUT_CHANGE:
         return { ...state, inputValues: { ...state.inputValues, ...payload } }
      case INPUTS_RESET:
         return { ...state, inputValues: { ...initialValues.inputValues } }
      case SAVE_OPERATIVO_LOADING:
         return { ...state, loading: true, data: [], error: null }
      case SAVE_OPERATIVO_SUCCESS:
         return { ...state, loading: false, data: payload, error: null }
      case SAVE_OPERATIVO_ERROR:
         return { ...state, loading: false, data: [], error: payload }
      case LIST_OPERATIVO_LOADING:
         return { ...state, loading: true, data: [], error: null }
      case LIST_OPERATIVO_SUCCESS:
         return { ...state, loading: false, data: payload, error: null }
      case LIST_OPERATIVO_ERROR:
         return { ...state, loading: false, data: [], error: payload }
      default:
         return state
   }
}