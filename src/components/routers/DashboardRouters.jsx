import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegistrarProcedimientoNac from 'components/RegistrarProcedimientoNac'
import EvaluarProcedimientoNac from 'components/EvaluarProcedimientoNac'

export default function DashboardRouters() {
   return (
      <>
         <Switch>
            <Route path='/' component={EvaluarProcedimientoNac} />
         </Switch>
      </>
   )
}