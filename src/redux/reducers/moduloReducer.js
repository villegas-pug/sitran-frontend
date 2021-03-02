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
         icon: 'Settings',
         nombre: 'PROCESOS',
         tooltip: 'Procesos',
         path: '/procesos',
         subModulo: [
            { icon: 'AddBox', nombre: 'INSERTAR INTERPOL EMITIDOS', descripcion: 'Insertar registro de fichas de interpol emitida.', tooltip: 'Nuevo interpol emitidos', pathImg: '/static/img/cards/consultas.png', path: '/procesos/nuevo-interpol' },
            { icon: 'AddBox', nombre: 'NUEVO OPERATIVO', descripcion: 'Crear operativo.', tooltip: 'Nuevo operativos', pathImg: '/static/img/cards/consultas.png', path: '/procesos/nuevo-operativo' }
         ]
      }, {
         icon: 'LiveHelp',
         nombre: 'UTILIDADES',
         tooltip: 'Utilidades',
         path: '/utilidades',
         subModulo: [
            { icon: 'AddBox', nombre: 'BUSCAR INTERPOL EMITIDOS', descripcion: 'Fichas de interpol registradas y emitida.', tooltip: 'Interpol Emitidos', pathImg: '/static/img/cards/consultas.png', path: '/utilidades/buscar-interpol' },
            { icon: 'AddBox', nombre: 'BUSCAR OPERATIVOS', descripcion: 'Operativos realizados desde el año 2019 a la actualidad.', tooltip: 'Operativos', pathImg: '/static/img/cards/consultas.png', path: '/utilidades/buscar-operativo' }
         ]
      }, {
         icon: 'BarChartRounded',
         nombre: 'REPORTES',
         tooltip: 'Reportes',
         path: '/reportes',
         subModulo: [
            { icon: 'AddBox', nombre: 'SOLICITUDES MESA DIGITAL', descripcion: 'Reporte estadístico de solicitudes, para los procedimientos de Nacionalización, realizados en Mesa Digital.', tooltip: 'Interpol Emitidos', pathImg: '/static/img/cards/Power_bi.png', path: '/reportes/mesa-digital' },
            { icon: 'AddBox', nombre: 'OPERATIVOS', descripcion: 'Reporte estadístico de operativos realizados, desde el año 2019 a la actualidad.', tooltip: 'Operativos', pathImg: '/static/img/cards/Power_bi.png', path: '/reportes/operativos' }
         ]
      },
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