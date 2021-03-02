import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Normativa from 'components/Normativa'
import CrearNormativa from 'components/Normativa/CrearNormativa'
import EvaluarNormativa from 'components/Normativa/EvaluarNormativa'
import BuscarInterpolSubMod from 'pages/submodulo/BuscarInterpolSubMod'
import UtilidadesMod from 'pages/modulo/UtilidadesMod'
import ReporteMod from 'pages/modulo/ReportesMod'
import LineamientoMod from 'pages/modulo/LineamientosMod'
import RptMesaDigitalSubMod from 'pages/submodulo/RptMesaDigitalSubMod'
import RptOperativosSubMod from 'pages/submodulo/RptOperativosSubMod'
import ProcesosMod from 'pages/modulo/ProcesosMod'
import NuevoOperativoSubMod from 'pages/submodulo/NuevoOperativoSubMod'
import NuevoInterpolSubMod from 'pages/submodulo/NuevoInterpolSubMod'
import BuscarOperativoSubMod from 'pages/submodulo/BuscarOperativoSubMod'

export default function DashboardRouters() {

   return (
      <>
         <Switch>
            {/*-> MOD: LINEAMIENTOS:  */}
            <Route exact path='/normativa-crear' component={CrearNormativa} />
            <Route exact path='/normativa-visualizar' component={Normativa} />
            <Route exact path='/normativa-evaluar' component={EvaluarNormativa} />
            <Route exact path='/lineamiento' component={LineamientoMod} />

            {/*-> MOD: UTILIDADES  */}
            <Route exact path='/utilidades' component={UtilidadesMod} />
            <Route exact path='/utilidades/buscar-interpol' component={BuscarInterpolSubMod} />
            <Route exact path='/utilidades/buscar-operativo' component={BuscarOperativoSubMod} />

            {/*-> MOD: PROCESOS  */}
            <Route exact path='/procesos' component={ProcesosMod} />
            <Route exact path='/procesos/nuevo-operativo' component={NuevoOperativoSubMod} />
            <Route exact path='/procesos/nuevo-interpol' component={NuevoInterpolSubMod} />


            {/*-> MOD: CHART'S  */}
            <Route exact path='/reportes' component={ReporteMod} />
            <Route exact path='/reportes/mesa-digital' component={RptMesaDigitalSubMod} />
            <Route exact path='/reportes/operativos' component={RptOperativosSubMod} />

            <Redirect to='/normativa-crear' />
         </Switch>
      </>
   )
}