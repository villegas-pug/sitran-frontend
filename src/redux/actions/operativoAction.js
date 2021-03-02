import {
   INPUT_CHANGE,
   INPUTS_RESET,
   SAVE_OPERATIVO_LOADING,
   SAVE_OPERATIVO_SUCCESS,
   SAVE_OPERATIVO_ERROR,
   LIST_OPERATIVO_LOADING,
   LIST_OPERATIVO_SUCCESS,
   LIST_OPERATIVO_ERROR,
} from 'redux/types/operativoType'

import { SUCCESS, WARNING, ERROR } from 'constants/levelLog'
import Noty from 'helpers/noty'

/* import { api } from 'config/axios' */
import axios from 'axios'
import getBlob from 'helpers/blob'

/*» INPUT'S  */
export const handleInputOnChange = (payload) => ({ type: INPUT_CHANGE, payload })
export const handleInputsReset = () => ({ type: INPUTS_RESET })

/*» TRANSACCTION: SAVE  */
const saveOperativoLoading = () => ({ type: SAVE_OPERATIVO_LOADING })
const saveOperativoSuccess = (payload) => ({ type: SAVE_OPERATIVO_SUCCESS, payload })
const saveOperativoError = (payload) => ({ type: SAVE_OPERATIVO_ERROR, payload })

export const saveOperativo = () => async (dispatch, getStore) => {
   dispatch(saveOperativoLoading())

   const { operativo: { inputValues } } = getStore()
   const { file, ...rest } = inputValues

   const frmData = new FormData()
   frmData.append('operativo', getBlob(rest))
   frmData.append('file', file)
   const { data: { levelLog, data, message } } = await axios({
      method: 'POST',
      url: 'http://localhost:54/save',
      data: frmData
   })
   switch (levelLog) {
      case SUCCESS:
         dispatch(saveOperativoSuccess(data))
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

/*» TRANSACCTION: LIST  */
const listOperativoLoading = () => ({ type: LIST_OPERATIVO_LOADING })
const listOperativoSuccess = (payload) => ({ type: LIST_OPERATIVO_SUCCESS, payload })
const listOperativoError = (payload) => ({ type: LIST_OPERATIVO_ERROR, payload })

export const listOperativo = () => async (dispatch) => {
   dispatch(listOperativoLoading())
   const { data: { levelLog, data, message } } = await axios('http://localhost:54/findAll')
   switch (levelLog) {
      case SUCCESS:
         dispatch(listOperativoSuccess(data))
         break
      case WARNING:
         dispatch(listOperativoError(message))
         Noty(WARNING, message)
         break
      case SUCCESS:
         dispatch(listOperativoError(message))
         Noty(ERROR, message)
         break

   }
}