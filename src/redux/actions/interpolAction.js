import { api } from 'config/axios'
import {
   SUCCESS,
   WARNING,
   ERROR
} from 'constants/levelLog'

import {
   OBTENER_INTERPOL_CARGANDO,
   OBTENER_INTERPOL_EXITO,
   OBTENER_INTERPOL_ERROR
} from 'redux/types/interpolAction'

const obtenerInterpolCargando = () => ({ type: OBTENER_INTERPOL_CARGANDO })
const obtenerInterpolExito = (payload) => ({ type: OBTENER_INTERPOL_EXITO, payload })
const obtenerInterpolError = (payload) => ({ type: OBTENER_INTERPOL_ERROR, payload })

export const obtenerInterpol = (payload) => async (dispatch, store) => {
   const { data: { levelLog, data, message } } = await api.get('microservicio-interpol/findAll')
   dispatch(obtenerInterpolCargando())
   switch (levelLog) {
      case SUCCESS:
         dispatch(obtenerInterpolExito(data))
         break
      case WARNING:
         dispatch(obtenerInterpolError(message))
         break
      case ERROR:
         dispatch(obtenerInterpolError(message))
         break
   }
} 