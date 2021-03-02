import {
   OBTENER_PAIS_CARGANDO,
   OBTENER_PAIS_EXITO,
   OBTENER_PAIS_ERROR,
} from 'redux/types/paisType'

import {
   SUCCESS,
   WARNING,
   ERROR,
} from 'constants/levelLog'

import { api } from 'config/axios'

const obtenerPaisCargando = () => ({ type: OBTENER_PAIS_CARGANDO })
const obtenerPaisExito = (payload) => ({ type: OBTENER_PAIS_EXITO, payload })
const obtenerPaisError = (payload) => ({ type: OBTENER_PAIS_ERROR, payload })

export const obtenerPais = () => async (dispatch, getStore) => {
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