import axios from 'axios'


import { END_POINT_BASE } from 'constants/endpointBase'
import {AUTHORIZATION} from 'constants/localStorage'

export const api = axios.create({
   baseURL: END_POINT_BASE,
   headers: {
      Authorization: window.localStorage.getItem(AUTHORIZATION),
      'Content-Type': 'application/json',
   },
})