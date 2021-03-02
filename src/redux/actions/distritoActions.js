import {
   LIST_DISTRITO_LOADING,
   LIST_DISTRITO_SUCCESS,
   LIST_DISTRITO_ERROR
} from 'redux/types/distritoType'

import {
   SUCCESS,
   WARNING,
   ERROR,
} from 'constants/levelLog'

import Noty from 'helpers/noty'
import { api } from 'config/axios'

const listDistritoLoading = () => ({ type: LIST_DISTRITO_LOADING })
const listDistritoSuccess = (payload) => ({ type: LIST_DISTRITO_SUCCESS, payload })
const listDistritoError = (payload) => ({ type: LIST_DISTRITO_ERROR, payload })

export const listDistrito = () => async (dispatch) => {

   dispatch(listDistritoLoading())

   const { data: { levelLog, data, message } } = await api('/microservicio-distrito/findAll')

   switch (levelLog) {
      case SUCCESS:
         dispatch(listDistritoSuccess(data))
         break
      case WARNING:
         dispatch(listDistritoError(message))
         Noty(WARNING, message)
         break
      case ERROR:
         dispatch(listDistritoError(message))
         Noty(ERROR, message)
         break

   }
}
