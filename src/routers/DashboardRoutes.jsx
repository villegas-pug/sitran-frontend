import React from 'react'
import { Route } from 'react-router-dom'
import { components } from 'config/routes'
import useAuth from 'hooks/useAuth'

export default function DashboardRouters(){

   /*» CUSTOM HOOK'S  */
   const { procedimientoAuthenticated } = useAuth()

   return (
      <>
         {
            procedimientoAuthenticated?.map(({ idProcedimiento, nombre, rutaPrincipal }) => (
               <Route 
                  key={idProcedimiento} 
                  path={rutaPrincipal}
                  component={components[nombre]} 
                  exact 
               />
            ))
         }
      </>
   )
}