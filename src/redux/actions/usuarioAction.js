import { api } from 'config/axios'
import {
   SUCCESS,
   WARNING,
   ERROR,
} from 'constants/levelLog'
export const OBTENER_USUARIO_CARGANDO = 'OBTENER_USUARIO_CARGANDO'
export const OBTENER_USUARIO_EXITO = 'OBTENER_USUARIO_EXITO'
export const OBTENER_USUARIO_ERROR = 'OBTENER_USUARIO_ERROR'

const obtenerUsuarioCargando = () => ({ type: OBTENER_USUARIO_CARGANDO })
const obtenerUsuarioExito = (payload) => ({ type: OBTENER_USUARIO_EXITO, payload })
const obtenerUsuarioError = (payload) => ({ type: OBTENER_USUARIO_ERROR, payload })

export const obtenerUsuario = () => async (dispatch, store) => {
   dispatch(obtenerUsuarioCargando())
   const { data: { levelLog, data, message } } = await api.get('/microservicio-usuario/findAll')
   switch (levelLog) {
      case SUCCESS:
         dispatch(obtenerUsuarioExito(data))
         break
      case WARNING:
         dispatch(obtenerUsuarioError(message))
         break
      case ERROR:
         dispatch(obtenerUsuarioError(message))
         break
   }
}