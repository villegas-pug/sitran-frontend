import React, { useRef } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { Save, DeleteForever } from '@material-ui/icons'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import ContentTitle from 'components/Styled/ContentTitle'
import AsignarProcedimientoNac from 'components/AsignarProcedimientoNac'
import FrmProcNac from 'components/Form/FrmProcNac'
import { useSelector } from 'react-redux'

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 1rem 1rem 0 1rem;
   justify-content: space-between;
   align-items: center;
`

const Item = styled.div`
   height: 5rem;
`

export default function RegistrarProcedimiento() {

   const dispatch = useDispatch()
   const rRegistrar = useRef()
   const rLimpiar = useRef()

   const {
      tipoDocumento: { data: tipoDocumento },
      pais: { data: pais },
      tipoSolicitud: { data: tipoSolicitud },
      tipoTramite: { data: tipoTramite },
      usuario: { data: usuario },
      forms: { inputValuesProcNac }
   } = useSelector(store => store)

   const optSpeedDialAction = [
      {
         icon: <Save />,
         tooltip: 'Registrar',
         handleOnClick: () => { rRegistrar.current.click() }
      }, {
         tooltip: 'Limpiar',
         icon: <DeleteForever />,
         handleOnClick: () => { rLimpiar.current.click() }
      },
   ]

   const handleSubmit = (values, meta) => {
      console.log(values)
      /* dispatch(registrarProcNac({ procNacionalizacion: values, usuario: usuario[0] })) */
   }

   return (
      <>
         <ContentTitle title='REGISTRO Y ASIGNACIÓN DE PROCEDIMIENTOS' />
         <FrmProcNac />
         <Grid container>
            <Grid item xs={12}>
               <AsignarProcedimientoNac />
            </Grid>
         </Grid>
      </>
   )
}