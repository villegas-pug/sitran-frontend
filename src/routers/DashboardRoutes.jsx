import React, { useEffect } from 'react'
import { 
   Route, 
   Switch 
} from 'react-router-dom'
import {components} from 'config/routes'
import useAuth from 'hooks/useAuth'

export default function DashboardRouters(){

   /*» HOOK'S  */
   const { procedimientoAuthenticated, handleFindUserByLogin } = useAuth()

   /*» EFFECT'S  */
   useEffect(() => { handleFindUserByLogin() }, [])
   
   return (
      <>
         <Switch>
            {
               procedimientoAuthenticated.map(({ idProcedimiento, nombre, rutaPrincipal }) => (
                  <Route 
                     key={idProcedimiento} 
                     path={rutaPrincipal}
                     component={components[nombre]} 
                     exact 
                  />
               ))
            }
         </Switch>
      </>
   )
}