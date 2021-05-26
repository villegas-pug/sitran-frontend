import { api } from 'config/axios'
import {
   SUCCESS,
   WARNING,
   ERROR,
} from 'constants/levelLog'
import { 
   FIND_USER_BY_LOGIN_ERROR,
   FIND_USER_BY_LOGIN_LOADING, 
   FIND_USER_BY_LOGIN_SUCCESS 
} from 'redux/types/usuarioType'

const findUserByLoginLoading = () => ({ type: FIND_USER_BY_LOGIN_LOADING })
const findUserByLoginSuccess = (payload) => ({ type: FIND_USER_BY_LOGIN_SUCCESS, payload })
const findUserByLoginError = (payload) => ({ type: FIND_USER_BY_LOGIN_ERROR, payload })

export const findUserByLogin = () => async (dispatch, getStore) => {
   dispatch(findUserByLoginLoading())
   const { usuario: { userLogin } } = getStore()
   console.log('Usuario: ', userLogin)
   const { data: { levelLog, data, message } } = await api.get(`/microservicio-usuario/findByLogin/${userLogin}`)
   switch (levelLog) {
   case SUCCESS:
      dispatch(findUserByLoginSuccess(data))
      break
   case WARNING:
      dispatch(findUserByLoginError(message))
      
      break
   case ERROR:
      dispatch(findUserByLoginError(message))
      break
   }
}