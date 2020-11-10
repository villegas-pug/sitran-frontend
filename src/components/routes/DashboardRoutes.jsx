import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Drawer from 'components/Drawer'
import RegistrarProcedimiento from 'components/RegistrarProcedimiento'

const DashboardRoutes = () => {
   return (
      <BrowserRouter>
         <Drawer bgColor='#FFD764'>
            <Route path='/' component={RegistrarProcedimiento} />
         </Drawer>
      </BrowserRouter>
   )
}

export default DashboardRoutes;