import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Drawer from 'components/Drawer'
import RegistrarProcedimiento from 'components/RegistrarProcedimientoNac'
import AsignarProcedimientoNac from 'components/AsignarProcedimientoNac'
import EvaluarProcedimientoNac from 'components/EvaluarProcedimientoNac'

const DashboardRoutes = () => {
   return (
      <BrowserRouter>
         <Drawer bgColor='#FFD764'>
            <Route path='/' component={EvaluarProcedimientoNac} />
            {/* <Route path='/' component={RegistrarProcedimiento} /> */}
            {/* <Route path='/' component={AsignarProcedimientoNac} /> */}
         </Drawer>
      </BrowserRouter>
   )
}

export default DashboardRoutes;