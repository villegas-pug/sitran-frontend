import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Normativa from 'components/Normativa'
import CrearNormativa from 'components/Normativa/CrearNormativa'
import AprobarNormativa from 'components/Normativa/AprobarNormativa'
import Interpol from 'pages/Interpol'
import ConsultaMenu from 'pages/ConsultaMenu'
import EstadisticaMenu from 'pages/EstadisticaMenu'
import LineamientoMenu from 'pages/LineamientoMenu'
import EstadisticaMesaDigital from 'pages/EstadisticaMesaDigital'
import EstadisticaOperativos from 'pages/EstadisticaOperativos'

export default function DashboardRouters() {

   return (
      <>
         <Switch>
            {/*-> LINEAMIENTOS:  */}
            {/* <Route path='/normativa-elaboracion' component={ElaboracionNormativa} /> */}
            <Route path='/normativa-crear' component={CrearNormativa} />
            <Route path='/normativa-visualizar' component={Normativa} />
            <Route path='/normativa-aprobacion' component={AprobarNormativa} />
            <Route path='/lineamiento' component={LineamientoMenu} />

            {/*-> CONSULTAS  */}
            <Route path='/consulta' component={ConsultaMenu} />
            <Route path='/consulta-interpol' component={Interpol} />

            {/*-> ESTADÍSTICAS  */}
            <Route path='/estadistica' component={EstadisticaMenu} />
            <Route path='/estadistica-mesa-digital' component={EstadisticaMesaDigital} />
            <Route path='/estadistica-operativos' component={EstadisticaOperativos} />

            {/* <Route path='/' component={DashboardRouters} /> */}
            {/* <Route path='/registrar' component={RegistrarProcedimiento} />
               <Route path='/evaluar' component={EvaluarProcedimientoNac} />
               <Route path='/asignar' component={AsignarProcedimientoNac} />
               <Route path='/calendar' component={Calendar} /> */}
            <Redirect to='/' />
         </Switch>
      </>
   )
}