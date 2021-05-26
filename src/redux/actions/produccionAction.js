import { api } from 'config/axios'
import fileDownload from 'js-file-download'
import { 
   ERROR,
   SUCCESS, 
   WARNING 
} from 'constants/levelLog'
import Noty from 'helpers/noty'
import { 
   ALLOW_TO_REGISTER_PRODUCCION_SDFM, 
   DENY_TO_REGISTER_PRODUCCION_SDFM,
   SAVE_PRODUCCION_SDFM_LOADING,
   SAVE_PRODUCCION_SDFM_SUCCESS,
   SAVE_PRODUCCION_SDFM_ERROR,
   DELETE_PRODUCCION_BY_ID_LOADING,
   DELETE_PRODUCCION_BY_ID_SUCCESS,
   DELETE_PRODUCCION_BY_ID_ERROR,
   SELECTED_ID_PRODUCCION_ON_TODAY_LIST,
   COUNT_ACTIVIDAD_CURRENT_WEEK_BY_USER_LOADING,
   COUNT_ACTIVIDAD_CURRENT_WEEK_BY_USER_SUCCESS,
   COUNT_ACTIVIDAD_CURRENT_WEEK_BY_USER_ERROR,
   COUNT_ACTIVIDAD_WEEK_BY_USER_LOADING,
   COUNT_ACTIVIDAD_WEEK_BY_USER_SUCCESS,
   COUNT_ACTIVIDAD_WEEK_BY_USER_ERROR
} from 'redux/types/produccionType'

export const allowToRegisterProduccion = () => ({ type: ALLOW_TO_REGISTER_PRODUCCION_SDFM })
export const denyToRegisterProduccion = () => ({ type: DENY_TO_REGISTER_PRODUCCION_SDFM })
export const selectedIdProduccionOnTodayList = (payload) => ({ type: SELECTED_ID_PRODUCCION_ON_TODAY_LIST, payload})

const saveProduccionSdfmLoading = () => ({ type: SAVE_PRODUCCION_SDFM_LOADING })
const saveProduccionSdfmSuccess = (payload) => ({ type: SAVE_PRODUCCION_SDFM_SUCCESS, payload })
const saveProduccionSdfmError = (payload) => ({ type: SAVE_PRODUCCION_SDFM_ERROR, payload })

const deleteProduccionByIdLoading = () => ({type: DELETE_PRODUCCION_BY_ID_LOADING})
const deleteProduccionByIdSuccess = (payload) => ({type: DELETE_PRODUCCION_BY_ID_SUCCESS, payload})
const deleteProduccionByIdError = (payload) => ({type: DELETE_PRODUCCION_BY_ID_ERROR, payload})

const countActividadCurrentWeekLoading = () => ({ type: COUNT_ACTIVIDAD_CURRENT_WEEK_BY_USER_LOADING })
const countActividadCurrentWeekSuccess = (payload) => ({ type: COUNT_ACTIVIDAD_CURRENT_WEEK_BY_USER_SUCCESS, payload })
const countActividadCurrentWeekError = (payload) => ({ type: COUNT_ACTIVIDAD_CURRENT_WEEK_BY_USER_ERROR, payload })

const countActividadWeekLoading = () => ({type: COUNT_ACTIVIDAD_WEEK_BY_USER_LOADING})
const countActividadWeekSuccess = () => ({type: COUNT_ACTIVIDAD_WEEK_BY_USER_SUCCESS})
const countActividadWeekError = (payload) => ({type: COUNT_ACTIVIDAD_WEEK_BY_USER_ERROR, payload})

export const saveProduccionSdfm = (payload) => async (dispatch, getStore) => {
   dispatch(saveProduccionSdfmLoading())

   const { usuario: { userLogin } } = getStore()

   const { data: { levelLog, data, message } } = await api({
      method: 'POST',
      url: '/microservicio-produccion/registerActividad',
      data: payload,
      params: { userAuth: userLogin }
   })

   switch (levelLog) {
   case SUCCESS:
      dispatch(saveProduccionSdfmSuccess(data))
      Noty(SUCCESS, message)
      break
   case WARNING:
      dispatch(saveProduccionSdfmError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(saveProduccionSdfmError(message))
      Noty(ERROR, message)
   }
}

export const deleteProduccionById = (idProd) => async (dispatch, getStore) => {
   dispatch(deleteProduccionByIdLoading())
   const { usuario: { userLogin: userAuth } } = getStore()
   const { data: { levelLog, data, message } } = await api({ 
      method: 'DELETE',
      url: '/microservicio-produccion/deleteById',
      params: { idProd, userAuth }
   })

   switch (levelLog) {
   case SUCCESS:
      dispatch(deleteProduccionByIdSuccess(data))
      Noty(SUCCESS, message)
      break
   case WARNING:
      dispatch(deleteProduccionByIdError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(deleteProduccionByIdError(message))
      Noty(ERROR, message)
      break
   }
}

export const countActividadCurrentWeek = () => async (dispatch, getStore) => {
   dispatch(countActividadCurrentWeekLoading())
   const { usuario: { userLogin: userAuth } } = getStore(store => store)

   const { data: { levelLog, data, message } } = await api({
      method: 'GET',
      url: '/microservicio-produccion/countActivitiesCurrentWeek',
      params: { userAuth }
   })

   switch (levelLog) {
   case SUCCESS:
      dispatch(countActividadCurrentWeekSuccess(data))
      break
   case WARNING:
      dispatch(countActividadCurrentWeekError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(countActividadCurrentWeekError(message))
      Noty(ERROR, message)
      break
   }
}

export const countActividadWeek = (refDate) => async (dispatch) => {
   dispatch(countActividadWeekLoading())
   try {
      const { data, headers } = await api({
         method: 'GET',
         url: '/microservicio-produccion/countActividadSemanalByDate',
         responseType: 'blob',
         params: { refDate }
      })

      const warMsj = '¡No hay datos para mostrar!'
      if (data.size === 0) {
         Noty(WARNING, warMsj)
         dispatch(countActividadWeekError(warMsj))
         return
      }

      const fileName = headers['content-disposition'].split('filename=')[1].replaceAll('"', '')
      fileDownload(data, fileName)

      dispatch(countActividadWeekSuccess())
   } catch (err) {
      dispatch(countActividadWeekError(err))
   }
}