import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegistrarProcedimientoNac from 'components/RegistrarProcedimientoNac'

export default function DashboardRouters() {
   return (
      <>
         <Switch>
            <Route path='/' component={RegistrarProcedimientoNac} />
         </Switch>
      </>
   )
}