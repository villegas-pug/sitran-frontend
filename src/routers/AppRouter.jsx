import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Drawer from 'components/Drawer'

import PrivateRoutes from 'routers/PrivateRoutes'
import useAuth from 'hooks/useAuth'
import PublicRoutes from './PublicRoutes'
import Portal from 'pages/Portal'

import DashboardRouters from 'routers/DashboardRoutes'

export default function AppRouter() {

   /*» CUSTOM HOOK'S...  */
   const { isAuthenticated, token, handleFindUserByLogin } = useAuth()

   /*» EFFECT'S:  */
   useEffect(() => { handleFindUserByLogin() }, [token])

   return (
      <BrowserRouter basename='/sidtefim'>
         <Drawer>
            <Switch>
               <PublicRoutes isAuthenticated={isAuthenticated} component={Portal} path='/portal' exact />
               <PrivateRoutes isAuthenticated={isAuthenticated} component={DashboardRouters} path='/' />
            </Switch>
         </Drawer>
      </BrowserRouter>
   )
}