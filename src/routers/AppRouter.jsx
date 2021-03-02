import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import DashboardRouters from './DashboardRoutes'
import Drawer from 'components/Drawer'
import useEmpresa from 'hooks/useEmpresa'
import usePais from 'hooks/usePais'
import useDistrito from 'hooks/useDistrito'

export default function AppRouter() {

   /*» HOOK'S...  */
   const { handleListEmpresa } = useEmpresa()
   const { handleListDistrito } = useDistrito()
   const { handleListPais } = usePais()

   /*» EFFECT'S  */
   /*» Load: Empresa...  */
   useEffect(() => { handleListEmpresa() }, [])

   /*» Load: Distrito...  */
   useEffect(() => { handleListDistrito() }, [])

   /*» Load: Pais...  */
   useEffect(() => { handleListPais() }, [])

   return (
      <BrowserRouter basename='/sidtefim'>
         <Drawer>
            <Switch>
               <DashboardRouters />
            </Switch>
         </Drawer>
      </BrowserRouter>
   )
}