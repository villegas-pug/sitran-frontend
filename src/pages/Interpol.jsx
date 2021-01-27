import React, { useRef, useMemo } from 'react'
import {
   Paper,
   Box,
   Tooltip,
   IconButton,
} from '@material-ui/core'
import {
   DeleteSweep,
   Search,
   FindInPage
} from '@material-ui/icons'
import MyTextField from 'components/Formik/MyTextField'
import AppTitle from 'components/Styled/AppTitle'
import SpeedDial from 'components/SpeedDial'
import Table from 'components/Table'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { useSelector } from 'react-redux'

const optFormik = {
   initialValues: {
      nombres: '',
      cedula: '',
      pasaporte: '',
      nacionalidad: '',
      fechaEmision: '',
      procedencia: ''
   },
   validationSchema: Yup.object({
      nombres: Yup.string().required('¡Campo requerido!').min(3, '¡Mínimo 3 caracteres!'),
   }),
   onSubmit: (values, meta) => {
      console.log(values)
   },
}


export default function Interpol() {

   /*» HOOK'S STORE...*/
   const { interpol } = useSelector(store => store)

   /*» HOOK'S...*/
   const rSubmit = useRef()
   const rReset = useRef()

   /*» EFFECT'S  */


   /*» ARGUMENT ◄► `dataTable`  */
   const dataTable = useMemo(() => ({
      columns: [
         { title: 'Nro', field: 'idInterpol', type: 'number', width: 10 },
         { title: 'Ciudadano', field: 'nombres', type: 'date', width: 70 },
         { title: 'Nacionalidad', field: 'nacionalidad', width: 20 },
         { title: 'Fecha Emisión', field: 'fechaEmision', type: 'date', width: 15 },
      ],
      data: []
   }), [])

   /*» ARGUMENT ◄► `dataTable`  */
   const configTable = () => ({
      actions: [{ icon: 'Detalle' }, { icon: '' }],
      components: ({ action: { icon }, data }) => {
         if (icon === 'Detalle')
            return (
               <Tooltip
                  title='Ver detalle'
                  arrow
               >
                  <IconButton
                     onClick={() => { }}
                  >
                     <FindInPage />
                  </IconButton>
               </Tooltip>
            )
      }
   })

   /*» ARGUMENT : `optSpeedDialAction`  */
   const optSpeedDialAction = [
      {
         icon: <Search />,
         tooltip: 'Buscar',
         handleOnClick: () => { rSubmit.current.click() }
      },
      {
         icon: <DeleteSweep />,
         tooltip: 'Limpiar',
         handleOnClick: () => { rReset.current.click() }
      }
   ]
   return (
      <>
         {/* HEADER... */}
         <Formik {...optFormik} >
            {
               ({ values: { nombres, cedula, pasaporte, nacionalidad, fechaEmision, procedencia } }) => (
                  <Form>
                     <AppTitle name='INTERPOL' />
                     <Paper elevation={5} style={{ padding: 20 }} >
                        <Box display='flex' justifyContent='space-between' height={55} >
                           <MyTextField name='nombres' value={nombres} label='Nombres' size={40} />
                           <MyTextField name='cedula' value={cedula} label='N° Cédula' size={10} />
                           <MyTextField name='pasaporte' value={pasaporte} label='N° Pasaporte' size={10} />
                           <MyTextField name='fechaEmision' value={fechaEmision} label='Fecha emisión' size={15} type='date' />
                           <MyTextField name='procedencia' value={procedencia} label='Procedencia' size={15} />
                        </Box>
                        <Box display='flex' justifyContent='flex-start' mt={1}>
                           <SpeedDial direction='right' optSpeedDialAction={optSpeedDialAction} />
                        </Box>
                     </Paper>
                     <input type='submit' ref={rSubmit} hidden />
                     <input type='reset' ref={rReset} hidden />
                  </Form>
               )
            }
         </Formik>

         {/* » BODY */}
         <Box mt={2}>
            <Table dataTable={dataTable} configTable={configTable} />
         </Box>
      </>


   )
}