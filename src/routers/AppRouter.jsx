import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import DashboardRouters from './DashboardRouters'
import Drawer from 'components/Drawer'
import { useDispatch } from 'react-redux'
import { obtenerInterpol } from 'redux/actions/interpolAction'

export default function AppRouter() {

   /*» HOOK'S STORE...  */
   const dispatch = useDispatch()


   /*» Load: Interpol...  */
   useEffect(() => {
      /* dispatch(obtenerInterpol()) */
   }, [])

   return (
      <BrowserRouter>
         <Drawer bgColor='#004795'>
            <Switch>
               <DashboardRouters />
            </Switch>
         </Drawer>
      </BrowserRouter>
   )
}