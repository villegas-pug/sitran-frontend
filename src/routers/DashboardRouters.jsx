import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Normativa from 'components/Normativa'
import CrearNormativa from 'components/Normativa/CrearNormativa'
import AprobarNormativa from 'components/Normativa/AprobarNormativa'
import Interpol from 'pages/Interpol'
import AsignarProcedimientoNac from 'components/AsignarProcedimientoNac'

export default function DashboardRouters() {

   return (
      <>
         <Switch>
            {/*-> LINEAMIENTOS:  */}
            {/* <Route path='/normativa-elaboracion' component={ElaboracionNormativa} /> */}
            <Route path='/normativa-crear' component={CrearNormativa} />
            <Route path='/normativa-visualizar' component={Normativa} />
            <Route path='/normativa-aprobacion' component={AprobarNormativa} />
            <Route path='/normativa' component={Normativa} />

            {/*-> INTERPOL  */}
            <Route path='/interpol' component={Interpol} />

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