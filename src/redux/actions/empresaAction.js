import {
   LIST_EMPRESA_LOADING,
   LIST_EMPRESA_SUCCESS,
   LIST_EMPRESA_ERROR
} from 'redux/types/empresaType'

import {
   SUCCESS,
   WARNING,
   ERROR,
} from 'constants/levelLog'

import Noty from 'helpers/noty'
import { api } from 'config/axios'

const listEmpresaLoading = () => ({ type: LIST_EMPRESA_LOADING })
const listEmpresaSuccess = (payload) => ({ type: LIST_EMPRESA_SUCCESS, payload })
const listEmpresaError = (payload) => ({ type: LIST_EMPRESA_ERROR, payload })

export const listEmpresa = () => async (dispatch) => {

   dispatch(listEmpresaLoading())

   const { data: { levelLog, data, message } } = await api('/microservicio-empresa/findAll')

   switch (levelLog) {
   case SUCCESS:
      dispatch(listEmpresaSuccess(data))
      break
   case WARNING:
      dispatch(listEmpresaError(message))
      Noty(WARNING, message)
      break
   case ERROR:
      dispatch(listEmpresaError(message))
      Noty(ERROR, message)
      break

   }
}