/* import BuscarInterpolSubMod from 'pages/submodulo/BuscarInterpolSubMod' */
import {lazy} from 'react'

/*» MOD'S  */
const HomeMod = lazy(() => import('pages/modulo/HomeMod'))
const ActividadesMod = lazy(() => import('pages/modulo/ActividadesMod'))
const PerfilMod = lazy(() => import('pages/modulo/PerfilMod'))
const UtilidadesMod = lazy(() => import('pages/modulo/UtilidadesMod'))
const ReporteMod = lazy(() => import('pages/modulo/ReportesMod'))
const LineamientoMod = lazy(() => import('pages/modulo/LineamientosMod'))
const ProcesosMod = lazy(() => import('pages/modulo/ProcesosMod'))

/*» SUBMOD'S  */
const BuscarInterpolSubMod = lazy(() => import('pages/submodulo/BuscarInterpolSubMod'))  
const RptMesaDigitalSubMod = lazy(() => import('pages/submodulo/MesaDigitalRptSubMod'))
const NuevoOperativoSubMod = lazy(() => import('pages/submodulo/NuevoOperativoSubMod'))
const NuevoInterpolSubMod = lazy(() => import('pages/submodulo/NuevoInterpolSubMod'))
const BuscarOperativoSubMod = lazy(() => import('pages/submodulo/BuscarOperativoSubMod'))
const DashboardOperativoSubMod = lazy(() => import('pages/submodulo/OperativoRptSubMod'))
const RegistrarActividad = lazy(() => import('pages/submodulo/RegistrarActividad'))
const ProduccionRptSubMod = lazy(() => import('pages/submodulo/ProduccionRptSubMod'))

/* const Normativa = lazy(() => import('components/Normativa'))
const CrearNormativa = lazy(() => import('components/Normativa/CrearNormativa'))
const EvaluarNormativa = lazy(() => import('components/Normativa/EvaluarNormativa')) */


const modulo = [
   {
      name: 'HOME',
      component: HomeMod
   }, {
      name: 'PERFIL' ,
      component: PerfilMod
   }, {
      name: 'ACTIVIDADES',
      component: ActividadesMod
   }, {
      name: 'LINEAMIENTOS',
      component: LineamientoMod
   }, {
      name: 'PROCESOS',
      component: ProcesosMod
   }, {
      name: 'UTILIDADES',
      component: UtilidadesMod
   },  {
      name: 'REPORTES',
      component: ReporteMod
   },
]

const subModulo = [
   {
      name: 'NUEVO OPERATIVO',
      component: NuevoOperativoSubMod
   }, {
      name: 'NUEVO INTERPOL',
      component: NuevoInterpolSubMod
   }, {
      name: 'BUSCAR OPERATIVO',
      component: BuscarOperativoSubMod
   }, {
      name: 'BUSCAR INTERPOL',
      component: BuscarInterpolSubMod
   }, {
      name: 'REPORTE MESA DIGITAL',
      component: RptMesaDigitalSubMod
   }, {
      name: 'REPORTE OPERATIVOS',
      component: DashboardOperativoSubMod
   }, {
      name: 'REPORTE PRODUCCION',
      component: ProduccionRptSubMod
   }, {
      name: 'REGISTRAR PRODUCCION',
      component: RegistrarActividad
   }
]

export const components = [...modulo, ...subModulo].reduce((map, {name, component}) => (map[name] = component, map), {})