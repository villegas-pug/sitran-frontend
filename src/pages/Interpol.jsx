import React, { useRef, useMemo, useEffect } from 'react'
import {
   Paper,
   Box,
   Tooltip,
   IconButton,
} from '@material-ui/core'
import {
   DeleteSweep,
   Search,
   FindInPage,
} from '@material-ui/icons'
import MyTextField from 'components/Formik/MyTextField'
import AppTitle from 'components/Styled/AppTitle'
import SpeedDial from 'components/SpeedDial'
import Flash from 'react-reveal/Flash'
import { ClockLoader } from 'react-spinners'

import Table from 'components/Table'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import useInterpol from 'hooks/useInterpol'
import useModal from 'hooks/useModal'
import InterpolDetalle from 'components/InterpolDetalle'

export default function Interpol() {

   /*» HOOK'S...*/
   const rSubmit = useRef()
   const rReset = useRef()

   /*» CUSTOM HOOK'S ... */
   const { interpolDb, loading, handleFindByApprox } = useInterpol()
   const [contentModal] = useModal({ title: <AppTitle name='DETALLE CIUDADANO' color='#777' size={1.2} />, width: 800 })

   /*» EFFECT'S ... */
   useEffect(() => { }, [])

   /*» HANDLER'S ...  */
   const handleActionDetalle = (rowData) => {
      console.log(rowData)
      contentModal(
         <InterpolDetalle data={rowData} />
      )
   }

   /*» ARGUMENT ◄► `dataTable`  */
   const configTable = useMemo(() => ({
      actions: [{ icon: 'Detalle' }],
      components: ({ action: { icon }, data }) => {
         if (icon === 'Detalle')
            return (
               <Tooltip
                  title='Ver detalle'
                  arrow
               >
                  <IconButton
                     onClick={() => { handleActionDetalle(data) }}
                  >
                     <FindInPage />
                  </IconButton>
               </Tooltip>
            )
      }
   }), [interpolDb])

   /*» ARGUMENT ◄► `dataTable`  */
   const dataTable = useMemo(() => ({
      columns: [
         { title: 'Nro', field: 'idInterpol', type: 'number', width: 10 },
         {
            title: 'Ciudadano', field: 'nombres', type: 'date', width: 70,
            render: ({ nombres, apellidos }) => `${nombres}, ${apellidos}`
         },
         { title: 'Nacionalidad', field: 'nacionalidad', width: 20 },
         {
            title: 'Fecha Emisión', field: 'fechaEmision', type: 'date', width: 15,
            render: ({ fechaEmision }) => moment(fechaEmision).format('LL')
         },
      ],
      data: interpolDb
   }), [interpolDb])

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

   const optFormik = {
      initialValues: {
         nombres: '',
         apellidos: '',
         cedula: '',
         pasaporte: '',
         nacionalidad: '',
         fechaEmision: '',
         procedencia: ''
      },
      validationSchema: Yup.object({
         /* nombres: Yup.string().required('¡Campo requerido!').min(3, '¡Mínimo 3 caracteres!'), */
      }),
      onSubmit: (values, meta) => { handleFindByApprox(values) },
   }

   return (
      <Flash>
         {/* HEADER... */}
         <Formik {...optFormik} >
            {
               ({ values: { nombres, apellidos, cedula, pasaporte, fechaEmision } }) => (
                  <Form>
                     <AppTitle name='CONSULTAR INTERPOL EMITIDOS' size={1.4} color='#777' />
                     <Paper elevation={5} style={{ padding: 20 }} >
                        <Box display='flex' justifyContent='space-around' >
                           <MyTextField name='nombres' value={nombres} label='Nombres' size={20} />
                           <MyTextField name='apellidos' value={apellidos} label='Apellidos' size={20} />
                           <MyTextField name='cedula' value={cedula} label='N° Cédula' size={10} />
                           <MyTextField name='pasaporte' value={pasaporte} label='N° Pasaporte' size={10} />
                           {/* <MyTextField name='fechaEmision' value={fechaEmision} label='Fecha emisión' size={15} type='date' /> */}
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
            {
               loading
                  ? (
                     <Box display='flex' justifyContent='center' alignItems='center' height={200}>
                        <ClockLoader color='#FFCD43' size={50} />
                     </Box>
                  )
                  : (interpolDb.length === 0
                     ? (
                        <Paper elevation={1}>
                           <Box display='flex' justifyContent='center' alignItems='center' height={200}>
                              <AppTitle name='««« No hay datos para mostrar »»»' color='#666' size={1} />
                           </Box>
                        </Paper>
                     )
                     : (
                        <Table dataTable={dataTable} configTable={configTable} />
                     )
                  )
            }
         </Box>
      </Flash>
   )
}