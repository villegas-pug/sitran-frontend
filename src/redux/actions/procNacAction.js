import { api } from 'config/axios'
import {
   SUCCESS,
   WARNING,
   ERROR
} from 'constants/levelLog'
import Noty from 'helpers/noty'

export const REGISTRAR_PROCNAC_CARGANDO = 'REGISTRAR_PROCNAC_CARGANDO '
export const REGISTRAR_PROCNAC_EXITO = 'REGISTRAR_PROCNAC_EXITO'
export const REGISTRAR_PROCNAC_ERROR = 'REGISTRAR_PROCNAC_ERROR'

const registrarProcNacCargando = () => ({ type: REGISTRAR_PROCNAC_CARGANDO })
const registrarProcNacExito = (payload) => ({ type: REGISTRAR_PROCNAC_EXITO, payload })
const registrarProcNacError = (payload) => ({ type: REGISTRAR_PROCNAC_ERROR, payload })

export const registrarProcNac = (payload) => async (dispatch, store) => {
   console.log(payload)
   dispatch(registrarProcNacCargando())
   const { data: { levelLog, data, message } } = await api({
      method: 'POST',
      url: '/microservicio-procnacionalizacion/save',
      data: payload,
   })

   switch (levelLog) {
      case SUCCESS:
         dispatch(registrarProcNacExito(data))
         Noty(SUCCESS, message)
         break
      case WARNING:
         dispatch(registrarProcNacError(message))
         Noty(WARNING, message)
         break
      case ERROR:
         dispatch(registrarProcNacError(message))
         Noty(ERROR, message)
         break
   }
}