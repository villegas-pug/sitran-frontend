import { api } from 'config/axios'
import {
   SUCCESS,
   WARNING,
   ERROR,
} from 'constants/levelLog'
export const OBTENER_TIPOSOLICITUD_CARGANDO = 'OBTENER_TIPOSOLICITUD_CARGANDO'
export const OBTENER_TIPOSOLICITUD_EXITO = 'OBTENER_TIPOSOLICITUD_EXITO'
export const OBTENER_TIPOSOLICITUD_ERROR = 'OBTENER_TIPOSOLICITUD_ERROR'

const obtenerTipoSolicitudCargando = () => ({ type: OBTENER_TIPOSOLICITUD_CARGANDO })
const obtenerTipoSolicitudExito = (payload) => ({ type: OBTENER_TIPOSOLICITUD_EXITO, payload })
const obtenerTipoSolicitudError = (payload) => ({ type: OBTENER_TIPOSOLICITUD_ERROR, payload })

export const obtenerTipoSolicitud = () => async (dispatch, store) => {
   dispatch(obtenerTipoSolicitudCargando())
   const { data: { levelLog, data, message } } = await api.get('/microservicio-tiposolicitud/findAll')
   switch (levelLog) {
      case SUCCESS:
         dispatch(obtenerTipoSolicitudExito(data))
         break
      case WARNING:
         dispatch(obtenerTipoSolicitudError(message))
         break
      case ERROR:
         dispatch(obtenerTipoSolicitudError(message))
         break
   }
}