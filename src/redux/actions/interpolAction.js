import { api } from 'config/axios'

import Noty from 'helpers/noty'
import {
   SUCCESS,
   WARNING,
   ERROR
} from 'constants/levelLog'
import {
   OBTENER_INTERPOL_CARGANDO,
   OBTENER_INTERPOL_EXITO,
   OBTENER_INTERPOL_ERROR,
   SAVE_INTERPOL_PDF_LOADING,
   SAVE_INTERPOL_PDF_SUCCESS,
   SAVE_INTERPOL_PDF_ERROR
} from 'redux/types/interpolType'

const obtenerInterpolCargando = () => ({ type: OBTENER_INTERPOL_CARGANDO })
const obtenerInterpolExito = (payload) => ({ type: OBTENER_INTERPOL_EXITO, payload })
const obtenerInterpolError = (payload) => ({ type: OBTENER_INTERPOL_ERROR, payload })

const saveInterpoPdfLoading = () => ({ type: SAVE_INTERPOL_PDF_LOADING })
const saveInterpoPdfSuccess = (payload) => ({ type: SAVE_INTERPOL_PDF_SUCCESS, payload })
const saveInterpoPdfError = (payload) => ({ type: SAVE_INTERPOL_PDF_ERROR, payload })

export const obtenerInterpol = () => async (dispatch) => {
   dispatch(obtenerInterpolCargando())
   const { data: { levelLog, message, data } } = await api.get('microservicio-interpol/findAll')
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

export const obtenerInterpolApprox = (payload) => async (dispatch) => {
   dispatch(obtenerInterpolCargando())
   const { data: { levelLog, message, data } } = await api({
      method: 'POST',
      url: 'microservicio-interpol/findByApprox',
      data: payload
   })
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

export const saveInterpoPdf = (file) => async (dispatch) => {
   dispatch(saveInterpoPdfLoading())

   const formData = new FormData()
   formData.append('archivo', file)

   const { data: { levelLog, data, message } } = await api({
      method: 'POST',
      url: '/microservicio-interpol/save',
      data: formData
   })

   switch (levelLog) {
   case SUCCESS:
      dispatch(saveInterpoPdfSuccess(data))
      Noty(SUCCESS, message)
      break
   case WARNING:
      dispatch(saveInterpoPdfError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(saveInterpoPdfSuccess(message))
      Noty(ERROR, message)
      break
   }
}