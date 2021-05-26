import { 
   FIND_USER_BY_LOGIN_ERROR, 
   FIND_USER_BY_LOGIN_LOADING, 
   FIND_USER_BY_LOGIN_SUCCESS 
} from 'redux/types/usuarioType'

const initialState = {
   loading: false,
   token: '',
   userLogin: 'rguevarav',
   data: [],
   error: null
}

export default function usuarioReducer(state = initialState, { type, payload }) {
   switch (type) {
   case FIND_USER_BY_LOGIN_LOADING:
      return { ...state, loading: true, data: [], error: null }
   case FIND_USER_BY_LOGIN_SUCCESS:
      return { ...state, loading: false, data: payload, error: null }
   case FIND_USER_BY_LOGIN_ERROR:
      return { ...state, loading: false, data: [], error: payload }
   default:
      return state
   }
}