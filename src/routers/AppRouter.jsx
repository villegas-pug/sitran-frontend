import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import RegistrarProcedimiento from 'components/RegistrarProcedimientoNac'
import AsignarProcedimientoNac from 'components/AsignarProcedimientoNac'
import EvaluarProcedimientoNac from 'components/EvaluarProcedimientoNac'
import Calendar from 'components/Calendar'
import RevisaRequisito from 'components/RevisaRequisito'
import DashboardRouters from './DashboardRouters'
import Drawer from 'components/Drawer'
import { obtenerTipoTramite } from 'redux/actions/tipoTramiteAction'
import { obtenerPais } from 'redux/actions/paisAction'
import { obtenerUsuario } from 'redux/actions/usuarioAction'
import { obtenerProcNac } from 'redux/actions/procNacAction'
import { useDispatch } from 'react-redux'
import Normativa from 'components/Normativa'
import ElaboracionNormativa from 'components/ElaboracionNormativa'

export default function AppRouter() {

   const dispatch = useDispatch()

   useEffect(() => {
      /* dispatch(obtenerPais()) */
      /* dispatch(obtenerTipoTramite()) */
      /* dispatch(obtenerUsuario()) */
      /*» READ... */
      /* dispatch(obtenerProcNac()) */
   }, [])

   return (
      <BrowserRouter>
         <Drawer bgColor='#004795'>
            <Switch>
               {/*-> NORMATIVA:  */}
               <Route path='/normativa-elaboracion' component={ElaboracionNormativa} />
               <Route path='/normativa-visualizar' component={Normativa} />
               <Route path='/normativa-aprobacion' component={Normativa} />
               <Route path='/normativa' component={Normativa} />

               {/* <Route path='/' component={DashboardRouters} /> */}
               {/* <Route path='/registrar' component={RegistrarProcedimiento} />
               <Route path='/evaluar' component={EvaluarProcedimientoNac} />
               <Route path='/asignar' component={AsignarProcedimientoNac} />
               <Route path='/calendar' component={Calendar} /> */}
               <Redirect to='/' />
            </Switch>
         </Drawer>
      </BrowserRouter>
   )
}

/*-> INCOMMING ► DB */
export const optProcedimiento = [
   { name: 'REGISTRO DE DATOS', path: '/registro', component: 'registrarProcedimiento' },
   { name: 'EVALUACIONES', path: '/evaluacion', component: 'asignarProcedimientoNac' },
   { name: 'CITAS', path: '/cita', component: 'evaluarProcedimientoNac' },
]
