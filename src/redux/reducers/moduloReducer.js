import {
   OBTENER_MODULO_CARGANDO,
   OBTENER_MODULO_ERROR,
   OBTENER_MODULO_EXITO
} from 'redux/types/moduloType'

const initialState = {
   loading: false,
   data: [
      { icon: 'AddBox', nombre: 'LINEAMIENTOS', tooltip: 'Lineamientos Generales', path: '/lineamiento' },
      /* { icon: 'AddBox', nombre: 'CONSULTAR INTERPOL EMITIDOS', tooltip: 'Consultar Interpol Emitidos', path: '/interpol' }, */
      {
         icon: 'PageviewRounded',
         nombre: 'CONSULTAS',
         tooltip: 'Consultas',
         path: '/consulta',
         subModulo: [
            { icon: 'AddBox', nombre: 'INTERPOL EMITIDOS', descripcion: 'Fichas de interpol registradas y emitida.', tooltip: 'Interpol Emitidos', pathImg: '/static/img/cards/consultas.png', path: '/consulta-interpol' },
            { icon: 'AddBox', nombre: 'OPERATIVOS', descripcion: 'Operativos realizados desde el año 2019 a la actualidad.', tooltip: 'Operativos', pathImg: '/static/img/cards/consultas.png', path: '/consulta-operativos' }
         ]
      },
      {
         icon: 'BarChartRounded',
         nombre: 'ESTADÍSTICAS',
         tooltip: 'Estadisticas',
         path: '/estadistica',
         subModulo: [
            { icon: 'AddBox', nombre: 'SOLICITUDES MESA DIGITAL', descripcion: 'Reporte estadístico de solicitudes, para los procedimientos de Nacionalización, realizados en Mesa Digital.', tooltip: 'Interpol Emitidos', pathImg: '/static/img/cards/Power_bi.png', path: '/estadistica-mesa-digital' },
            { icon: 'AddBox', nombre: 'OPERATIVOS', descripcion: 'Reporte estadístico de operativos realizados, desde el año 2019 a la actualidad.', tooltip: 'Operativos', pathImg: '/static/img/cards/Power_bi.png', path: '/estadistica-operativos' }
         ]
      },
      /* { icon: 'Check', nombre: 'EN PROYECTO EVALUACIÓN', path: '/evaluar' },
      { icon: 'AddBox', nombre: 'CITAS', path: '/calendar' }, */
   ],
   error: null
}

export default function moduloReducer(state = initialState, { type, payload }) {
   switch (type) {
      case OBTENER_MODULO_CARGANDO:
         return { loading: true, data: [], error: null }
      case OBTENER_MODULO_ERROR:
         return { loading: false, data: payload, error: null }
      case OBTENER_MODULO_EXITO:
         return { loading: false, data: [], error: payload }
      default:
         return state
   }
}