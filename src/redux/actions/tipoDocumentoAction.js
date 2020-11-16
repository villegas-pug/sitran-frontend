import { api } from 'config/axios'
import {
   SUCCESS,
   WARNING,
   ERROR
} from 'constants/levelLog'

export const OBTENER_TIPODOCUMENTO_CARGANDO = 'OBTENER_TIPODOCUMENTO_CARGANDO'
export const OBTENER_TIPODOCUMENTO_EXITO = 'OBTENER_TIPODOCUMENTO_EXITO'
export const OBTENER_TIPODOCUMENTO_ERROR = 'OBTENER_TIPODOCUMENTO_ERROR'

const obtenerTipoDocumentoCargando = () => ({ type: OBTENER_TIPODOCUMENTO_CARGANDO })
const obtenerTipoDocumentoExito = (payload) => ({ type: OBTENER_TIPODOCUMENTO_EXITO, payload })
const obtenerTipoDocumentoError = (payload) => ({ type: OBTENER_TIPODOCUMENTO_ERROR, payload })


export const obtenerTipoDocumento = (payload) => async (dispatch, store) => {
   dispatch(obtenerTipoDocumentoCargando())
   const { data: { levelLog, data, message } } = await api.get('/microservicio-tipodocumento/findAll')
   switch (levelLog) {
      case SUCCESS:
         dispatch(obtenerTipoDocumentoExito(data))
         break
      case WARNING:
         dispatch(obtenerTipoDocumentoError(message))
         break
      case ERROR:
         dispatch(obtenerTipoDocumentoError(message))
         break
   }
}
