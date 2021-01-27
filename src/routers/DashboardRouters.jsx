import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import RegistrarProcedimientoNac from 'components/RegistrarProcedimientoNac'
import EvaluarProcedimientoNac from 'components/EvaluarProcedimientoNac'
import Normativa from 'components/Normativa'
import ElaboracionNormativa from 'components/ElaboracionNormativa'
import CrearNormativa from 'components/Normativa/CrearNormativa'
import AprobarNormativa from 'components/Normativa/AprobarNormativa'
import Interpol from 'pages/Interpol'

import { useDispatch } from 'react-redux'

/*» ACTIONS...  */
import { obtenerInterpol } from 'redux/actions/interpolAction'


export default function DashboardRouters() {

   /*» HOOK'S STORE...  */
   const dispatch = useDispatch()


   /*» Load: Interpol...  */
   useEffect(() => {
      dispatch(obtenerInterpol())
   }, [])

   return (
      <>
         <Switch>
            {/*-> LINEAMIENTOS:  */}
            {/* <Route path='/normativa-elaboracion' component={ElaboracionNormativa} /> */}
            <Route path='/normativa-crear' component={CrearNormativa} />
            <Route path='/normativa-visualizar' component={Normativa} />
            <Route path='/normativa-aprobacion' component={AprobarNormativa} />
            <Route path='/normativa' component={Normativa} />

            {/*-> INTERPOL  */}
            <Route path='/interpol' component={Interpol} />

            {/* <Route path='/' component={DashboardRouters} /> */}
            {/* <Route path='/registrar' component={RegistrarProcedimiento} />
               <Route path='/evaluar' component={EvaluarProcedimientoNac} />
               <Route path='/asignar' component={AsignarProcedimientoNac} />
               <Route path='/calendar' component={Calendar} /> */}
            <Redirect to='/' />
         </Switch>
      </>
   )
}