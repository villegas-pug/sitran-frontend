import { message } from 'antd'
import { api } from 'config/axios'
import {
   SUCCESS,
   WARNING,
   ERROR,
} from 'constants/levelLog'
export const OBTENER_PAIS_CARGANDO = 'OBTENER_PAIS_CARGANDO'
export const OBTENER_PAIS_EXITO = 'OBTENER_PAIS_EXITO'
export const OBTENER_PAIS_ERROR = 'OBTENER_PAIS_ERROR'

const obtenerPaisCargando = () => ({ type: OBTENER_PAIS_CARGANDO })
const obtenerPaisExito = (payload) => ({ type: OBTENER_PAIS_EXITO, payload })
const obtenerPaisError = (payload) => ({ type: OBTENER_PAIS_ERROR, payload })

export const obtenerPais = () => async (dispatch, store) => {
   dispatch(obtenerPaisCargando())
   const { data: { levelLog, data, message } } = await api.get('/microservicio-pais/findAll')
   switch (levelLog) {
      case SUCCESS:
         dispatch(obtenerPaisExito(data))
         break
      case WARNING:
         dispatch(obtenerPaisError(message))
         break
      case ERROR:
         dispatch(obtenerPaisError(message))
         break
   }
}