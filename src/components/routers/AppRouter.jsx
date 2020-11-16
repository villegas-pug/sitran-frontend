import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RegistrarProcedimiento from 'components/RegistrarProcedimientoNac'
import AsignarProcedimientoNac from 'components/AsignarProcedimientoNac'
import Calendar from 'components/Calendar'
import DashboardRouters from './DashboardRouters'
import Drawer from 'components/Drawer'
import { obtenerTipoDocumento } from 'redux/actions/tipoDocumentoAction'
import { obtenerTipoSolicitud } from 'redux/actions/tipoSolicitudAction'
import { obtenerTipoTramite } from 'redux/actions/tipoTramiteAction'
import { obtenerPais } from 'redux/actions/paisAction'
import { obtenerUsuario } from 'redux/actions/usuarioAction'
import { useDispatch } from 'react-redux'


export default function AppRouter() {
   const dispatch = useDispatch()
   useEffect(() => {
      /* dispatch(obtenerTipoDocumento())
      dispatch(obtenerPais())
      dispatch(obtenerTipoSolicitud())
      dispatch(obtenerTipoTramite())
      dispatch(obtenerUsuario()) */
   }, [])

   return (
      <BrowserRouter>
         <Drawer bgColor='#FFD764'>
            <Switch>
               <Route path='/' component={DashboardRouters} />
            </Switch>
         </Drawer>
      </BrowserRouter>
   )
}


export const lstProcedimiento = [
   { name: 'REGISTRO DE DATOS', path: '/registro', component: 'registrarProcedimiento' },
   { name: 'EVALUACIONES', path: '/evaluacion', component: 'asignarProcedimientoNac' },
   { name: 'CITAS', path: '/cita', component: 'evaluarProcedimientoNac' },
]

export const lstComponents = {
   registrarProcedimiento: <RegistrarProcedimiento />,
   asignarProcedimientoNac: <AsignarProcedimientoNac />,
   evaluarProcedimientoNac: <Calendar />,
}