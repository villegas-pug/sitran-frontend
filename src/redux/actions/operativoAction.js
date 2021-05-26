import {
   INPUT_CHANGE,
   INPUTS_RESET,
   SAVE_OPERATIVO_LOADING,
   SAVE_OPERATIVO_SUCCESS,
   SAVE_OPERATIVO_ERROR,
   LIST_OPERATIVO_LOADING,
   LIST_OPERATIVO_SUCCESS,
   LIST_OPERATIVO_ERROR,
   LIST_OPE_PIVOTED_LOADING,
   LIST_OPE_PIVOTED_SUCCESS,
   LIST_OPE_PIVOTED_ERROR,
   LIST_OPE_PIVOTED_NACIONALIDAD_LOADING,
   LIST_OPE_PIVOTED_NACIONALIDAD_SUCCESS,
   LIST_OPE_PIVOTED_NACIONALIDAD_ERROR,
   LIST_OPE_PIVOTED_SEXO_LOADING,
   LIST_OPE_PIVOTED_SEXO_SUCCESS,
   LIST_OPE_PIVOTED_SEXO_ERROR,
   LIST_OPE_BY_FILTER_TO_EXCEL_LOADING,
   LIST_OPE_BY_FILTER_TO_EXCEL_ERROR,
   LIST_OPE_BY_FILTER_TO_EXCEL_SUCCESS,
   LIST_OPE_PIVOTED_ANUAL_LOADING,
   LIST_OPE_PIVOTED_ANUAL_SUCCESS,
   LIST_OPE_PIVOTED_ANUAL_ERROR,
   LIST_INTERVENIDOS_PIVOTED_LOADING,
   LIST_INTERVENIDOS_PIVOTED_SUCCESS,
   LIST_INTERVENIDOS_PIVOTED_ERROR,
   LIST_TIPO_INFRACCION_PIVOTED_LOADING,
   LIST_TIPO_INFRACCION_PIVOTED_SUCCESS,
   LIST_TIPO_INFRACCION_PIVOTED_ERROR,
   LIST_TIPO_OPERATIVO_PIVOTED_LOADING,
   LIST_TIPO_OPERATIVO_PIVOTED_SUCCESS,
   RESET_OPE_BY_FILTER_TO_EXCEL,
   LIST_TIPO_OPERATIVO_PIVOTED_ERROR,
   UPDATE_OPE_NRO_INFO_LOADING,
   UPDATE_OPE_NRO_INFO_SUCCESS,
   UPDATE_OPE_NRO_INFO_ERROR,
   LIST_OPE_PIVOTED_MODALIDAD_LOADING,
   LIST_OPE_PIVOTED_MODALIDAD_ERROR,
   LIST_OPE_PIVOTED_MODALIDAD_SUCCESS,
} from 'redux/types/operativoType'

import { SUCCESS, WARNING, ERROR } from 'constants/levelLog'
import Noty from 'helpers/noty'

import { api } from 'config/axios'
import getBlob from 'helpers/blob'

import {resetStagesNuevoOperativo} from 'redux/actions/stagesAction'

/*» INPUT'S  */
export const handleInputOnChange = (payload) => ({ type: INPUT_CHANGE, payload })
export const handleInputsReset = () => ({ type: INPUTS_RESET })

/*» TRANSACCTION: SAVE  */
const saveOperativoLoading = () => ({ type: SAVE_OPERATIVO_LOADING })
const saveOperativoSuccess = (payload) => ({ type: SAVE_OPERATIVO_SUCCESS, payload })
const saveOperativoError = (payload) => ({ type: SAVE_OPERATIVO_ERROR, payload })

/*» ACTION'S: LIST  */
const toListOperativoLoading = () => ({ type: LIST_OPERATIVO_LOADING })
const toListOperativoSuccess = (payload) => ({ type: LIST_OPERATIVO_SUCCESS, payload })
const toListOperativoError = (payload) => ({ type: LIST_OPERATIVO_ERROR, payload })

/*» ACTION'S UPDATE  */
const toUpdateOpeByIdLoading = () => ({ type: UPDATE_OPE_NRO_INFO_LOADING })
const toUpdateOpeByIdSuccess = (payload) => ({ type: UPDATE_OPE_NRO_INFO_SUCCESS, payload })
const toUpdateOpeByIdError = (payload) => ({ type: UPDATE_OPE_NRO_INFO_ERROR, payload })

/*» ACTION'S: To report's */
const toListOpeAnualPivotedLoading = () => ({ type: LIST_OPE_PIVOTED_ANUAL_LOADING })
const toListOpeAnualPivotedSuccess = (payload) => ({ type: LIST_OPE_PIVOTED_ANUAL_SUCCESS, payload  })
const toListOpeAnualPivotedError = (payload) => ({ type: LIST_OPE_PIVOTED_ANUAL_ERROR, payload})

const toListIntervenidosPivotedLoading = () => ({ type: LIST_INTERVENIDOS_PIVOTED_LOADING})
const toListIntervenidosPivotedSuccess = (payload) => ({ type: LIST_INTERVENIDOS_PIVOTED_SUCCESS, payload})
const toListIntervenidosPivotedError = (payload) => ({ type: LIST_INTERVENIDOS_PIVOTED_ERROR, payload})

const toListTipoInfraccionPivotedLoading = () => ({ type: LIST_TIPO_INFRACCION_PIVOTED_LOADING})
const toListTipoInfraccionPivotedSuccess = (payload) => ({ type: LIST_TIPO_INFRACCION_PIVOTED_SUCCESS, payload})
const toListTipoInfraccionPivotedError = (payload) => ({ type: LIST_TIPO_INFRACCION_PIVOTED_ERROR, payload})

const toListTipoOpePivotedLoading = () => ({ type: LIST_TIPO_OPERATIVO_PIVOTED_LOADING })
const toListTipoOpePivotedSuccess = (payload) => ({ type: LIST_TIPO_OPERATIVO_PIVOTED_SUCCESS, payload })
const toListTipoOpePivotedError = (payload) => ({ type: LIST_TIPO_OPERATIVO_PIVOTED_ERROR, payload })

const toListOpePivotedLoading = () => ({ type: LIST_OPE_PIVOTED_LOADING })
const toListOpePivotedSuccess = (payload) => ({ type: LIST_OPE_PIVOTED_SUCCESS, payload })
const toListOpePivotedError = (payload) => ({ type: LIST_OPE_PIVOTED_ERROR, payload })

const toListOpePivotedByNacionalidadLoading = () => ({ type: LIST_OPE_PIVOTED_NACIONALIDAD_LOADING })
const toListOpePivotedByNacionalidadSuccess = (payload) => ({ type: LIST_OPE_PIVOTED_NACIONALIDAD_SUCCESS, payload })
const toListOpePivotedByNacionalidadError = (payload) => ({ type: LIST_OPE_PIVOTED_NACIONALIDAD_ERROR, payload })

const toListOpePivotedBySexoLoading = () => ({ type: LIST_OPE_PIVOTED_SEXO_LOADING })
const toListOpePivotedBySexoSuccess = (payload) => ({ type: LIST_OPE_PIVOTED_SEXO_SUCCESS, payload })
const toListOpePivotedBySexoError = (payload) => ({ type: LIST_OPE_PIVOTED_SEXO_ERROR, payload })

const toListOpePivotedByModalidadLoading = () => ({ type: LIST_OPE_PIVOTED_MODALIDAD_LOADING })
const toListOpePivotedByModalidadSuccess = (payload) => ({ type: LIST_OPE_PIVOTED_MODALIDAD_SUCCESS, payload })
const toListOpePivotedByModalidadError = (payload) => ({ type: LIST_OPE_PIVOTED_MODALIDAD_ERROR, payload })

const toListOpeByFilterToExcelLoading = () => ({ type: LIST_OPE_BY_FILTER_TO_EXCEL_LOADING })
const toListOpeByFilterToExcelSuccess = (payload) => ({ type: LIST_OPE_BY_FILTER_TO_EXCEL_SUCCESS, payload })
const toListOpeByFilterToExcelError = (payload) => ({ type: LIST_OPE_BY_FILTER_TO_EXCEL_ERROR, payload })
export const resetListOpeByFilterToExcel = () => ({ type: RESET_OPE_BY_FILTER_TO_EXCEL })

export const saveOperativo = () => async (dispatch, getStore) => {
   dispatch(saveOperativoLoading())

   const { operativo: { inputValues } } = getStore()
   const { file, ...rest } = inputValues

   const frmData = new FormData()
   frmData.append('operativo', getBlob(rest))
   frmData.append('file', file)
   const { data: { levelLog, data, message } } = await api({
      method: 'POST',
      url: '/microservicio-operativo/save',
      data: frmData,
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(saveOperativoSuccess(data))
      dispatch(handleInputsReset())
      dispatch(resetStagesNuevoOperativo())
      Noty(SUCCESS, message)
      break
   case WARNING:
      dispatch(saveOperativoError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(saveOperativoError(message))
      Noty(ERROR, message)
      break
   }
}

/*» ASYNC ACTION'S  */
export const toListOperativo = () => async (dispatch) => {
   dispatch(toListOperativoLoading())
   const { data: { levelLog, data, message } } = await api('/microservicio-operativo/findAll')
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListOperativoSuccess(data))
      break
   case WARNING:
      dispatch(toListOperativoError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(toListOperativoError(message))
      Noty(ERROR, message)
      break
   }
}

export const toListOpeAnualPivoted = () => async (dispatch) => {
   dispatch(toListOpeAnualPivotedLoading())
   const { data: { levelLog, data, message } } = await api('/microservicio-operativo/countPivotedByOpeAnual')
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListOpeAnualPivotedSuccess(data))
      break
   case WARNING:
      dispatch(toListOpeAnualPivotedError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(toListOpeAnualPivotedError(message))
      Noty(ERROR, message)
      break
   }
}

export const toListIntervenidosPivoted = (payload) => async (dispatch) => {
   dispatch(toListIntervenidosPivotedLoading())
   const { data: { levelLog, data, message } } = await api({
      method: 'GET',
      url: '/microservicio-operativo/countPivotedByIntervenidos',
      params: payload
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListIntervenidosPivotedSuccess(data))
      break
   case WARNING:
      dispatch(toListIntervenidosPivotedError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(toListIntervenidosPivotedError(message))
      Noty(ERROR, message)
      break
   }
}

export const toListTipoOpePivoted = (payload) => async (dispatch) => {
   dispatch(toListTipoOpePivotedLoading())
   const { data: { levelLog, data, message } } = await api({
      method: 'GET',
      url: '/microservicio-operativo/countPivotedByTipoOperativo',
      params: payload
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListTipoOpePivotedSuccess(data))
      break
   case WARNING:
      dispatch(toListTipoOpePivotedError(message))
      break
   case ERROR:
      dispatch(toListTipoOpePivotedError(message))
      break
   }
}

export const toListTipoInfraccionPivoted = (payload) => async (dispatch) => {
   dispatch(toListTipoInfraccionPivotedLoading())

   const { data: { levelLog, data, message } } = await api({
      method: 'GET',
      url: '/microservicio-operativo/countPivotedByTipoInfraccion',
      params: payload
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListTipoInfraccionPivotedSuccess(data))
      break
   case WARNING:
      dispatch(toListTipoInfraccionPivotedError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(toListTipoInfraccionPivotedError(message))
      Noty(ERROR, message)
      break
   }
}

export const toListOpePivoted = () => async (dispatch) => {
   dispatch(toListOpePivotedLoading())
   const { data: { levelLog, data, message } } = await api('/microservicio-operativo/countPivotedOpe')
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListOpePivotedSuccess(data))
      break
   case WARNING:
      dispatch(toListOpePivotedError(message))
      break
   case ERROR:
      dispatch(toListOpePivotedError(message))
      Noty(ERROR, message)
      break
   }
}

export const toListOpePivotedByNacionalidad = (payload) => async (dispatch) => {
   dispatch(toListOpePivotedByNacionalidadLoading())
   const { data: { levelLog, data, message } } = await api({
      method: 'GET',
      url: '/microservicio-operativo/countPivotedOpeByNacionalidad',
      params: payload
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListOpePivotedByNacionalidadSuccess(data))
      break
   case WARNING:
      dispatch(toListOpePivotedByNacionalidadError(message))
      break
   case ERROR:
      dispatch(toListOpePivotedByNacionalidadError(message))
      Noty(ERROR, message)
   }
}

export const toListOpePivotedBySexo = (payload) => async (dispatch) => {
   dispatch(toListOpePivotedBySexoLoading())
   const { data: { levelLog, data, message } } = await api({
      method: 'GET',
      url: '/microservicio-operativo/countPivotedOpeBySexo',
      params: payload
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListOpePivotedBySexoSuccess(data))
      break
   case WARNING:
      dispatch(toListOpePivotedBySexoError(message))
      break
   case ERROR:
      dispatch(toListOpePivotedBySexoError(message))
      Noty(ERROR, message)
   }
}

export const toListOpePivotedByModalidad = (payload) => async (dispatch) => {
   dispatch(toListOpePivotedByModalidadLoading())
   const { data: { levelLog, data, message } } = await api({
      method: 'GET',
      url: '/microservicio-operativo/countPivotedOpeByModalidad',
      params: payload
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListOpePivotedByModalidadSuccess(data))
      break
   case WARNING:
      dispatch(toListOpePivotedByModalidadError(message))
      break
   case ERROR:
      dispatch(toListOpePivotedByModalidadError(message))
      Noty(ERROR, message)
   }
}

export const toListOpeByFilterToExcel = (payload) => async (dispatch) => {
   console.log(payload)
   dispatch(toListOpeByFilterToExcelLoading())
   const { data: { levelLog, data, message } } = await api({
      method: 'POST',
      url: '/microservicio-operativo/findOpeByCustomFilterToExcel',
      data: payload
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toListOpeByFilterToExcelSuccess(data))
      break
   case WARNING:
      dispatch(toListOpeByFilterToExcelError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(toListOpeByFilterToExcelError(message))
      Noty(ERROR, message)
   }
}

export const toUpdateOpeById = (idOpe, numeroInforme) => async (dispatch) => {
   dispatch(toUpdateOpeByIdLoading())
   const {data: { levelLog, data, message }} = await api({
      method: 'PUT',
      url: `/microservicio-operativo/updateOpeById/${idOpe}/${numeroInforme}`
   })
   switch (levelLog) {
   case SUCCESS:
      dispatch(toUpdateOpeByIdSuccess(data))
      Noty(SUCCESS, message)
      break
   case WARNING:
      dispatch(toUpdateOpeByIdError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(toUpdateOpeByIdError(message))
      Noty(ERROR, message)
      break
   }
}