import { api } from 'config/axios'
import { SUCCESS, WARNING, ERROR } from 'constants/levelLog'
import Noty from 'helpers/noty'

import {
   OBTENER_MODULO_CARGANDO,
   OBTENER_MODULO_ERROR,
   OBTENER_MODULO_EXITO
} from 'redux/types/moduloType'


export const obtenerModuloCargando = () => ({ type: OBTENER_MODULO_CARGANDO })
export const obtenerModuloExito = (payload) => ({ type: OBTENER_MODULO_ERROR, payload })
export const obtenerModuloError = (payload) => ({ type: OBTENER_MODULO_EXITO, payload })

export const obtenerModulo = () => async (dispatch) => {
   const { data: { levelLog, message, data } } = await api.get('/microservicio-usrprocedimiento/test')
   dispatch(obtenerModuloCargando())
   switch (levelLog) {
   case SUCCESS:
      dispatch(obtenerModuloExito(data))
      Noty(SUCCESS, message)
      break
   case WARNING:
      dispatch(obtenerModuloError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(obtenerModuloError(message))
      Noty(ERROR, message)
      break
   }
}