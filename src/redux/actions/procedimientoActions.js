import { api } from 'config/axios'
import { SUCCESS, WARNING, ERROR } from 'constants/levelLog'
import Noty from 'helpers/noty'
export const OBTENER_PROCEDIMIENTO_CARGANDO = 'OBTENER_PROCEDIMIENTO_CARGANDO'
export const OBTENER_PROCEDIMIENTO_EXITO = 'OBTENER_PROCEDIMIENTO_EXITO'
export const OBTENER_PROCEDIMIENTO_ERROR = 'OBTENER_PROCEDIMIENTO_ERROR'

export const obtenerProcedimientoCargando = () => ({ type: OBTENER_PROCEDIMIENTO_CARGANDO })
export const obtenerProcedimientoExito = (payload) => ({ type: OBTENER_PROCEDIMIENTO_EXITO, payload })
export const obtenerProcedimientoError = (payload) => ({ type: OBTENER_PROCEDIMIENTO_ERROR, payload })

export const obtenerProcedimiento = () => async (dispatch, store) => {
   const { data: { levelLog, message, data } } = await api.get('/microservicio-usrprocedimiento/test')
   console.log(data)
   dispatch(obtenerProcedimientoCargando())
   switch (levelLog) {
      case SUCCESS:
         dispatch(obtenerProcedimientoExito(data))
         Noty(SUCCESS, message)
         break
      case WARNING:
         dispatch(obtenerProcedimientoError(message))
         Noty(WARNING, message)
         break
      case ERROR:
         dispatch(obtenerProcedimientoError(message))
         Noty(ERROR, message)
         break
   }
}