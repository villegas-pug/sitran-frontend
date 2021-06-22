import React, { useRef, useMemo, useState, useEffect } from 'react'
import {
   Paper,
   Box,
   Tooltip,
   IconButton, Typography,
} from '@material-ui/core'
import {
   DeleteSweep,
   Search,
   FindInPage,
   GetApp
} from '@material-ui/icons'
import Fade from 'react-reveal/Fade'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import styled from 'styled-components'

import MyTextField from 'components/Formik/MyTextField'
import AppTitle from 'components/Styled/AppTitle'
import SpeedDial from 'components/SpeedDial'
import Table from 'components/Table'
import InterpolDetalle from 'components/InterpolDetalle'
import SimpleModal from 'components/SimpleModal'

import useInterpol from 'hooks/useInterpol'
import useBreakpoints from 'hooks/useBreakpoints'
import { ENDPOINT_BASE } from 'constants/endpointBase'

const Content = styled.div`
   margin: .5rem;
`
export default function BuscarInterpolSubMod(props) {
   /*» HOOK'S...*/
   const rSubmit = useRef()
   const rReset = useRef()
   const [openModal, setOpenModal] = useState(false)
   const [detInterpolRecord, setDetInterpolRecord] = useState({})

   /*» CUSTOM HOOK'S ... */
   const { interpolLoading, interpolDb, handleFindByApprox } = useInterpol()
   const { currentScreen, breakpoints, unsuscribeScreenResizeListener } = useBreakpoints() 

   /*» EFFECT'S ... */
   useEffect(() => () => { unsuscribeScreenResizeListener() }, [])

   /*» HANDLER'S ...  */
   const handleActionDetalle = (rowData) => {
      setDetInterpolRecord(rowData)
      setOpenModal(true)
   }

   /*» DEPENDENCY'S  */
   /*» ARGUMENT ◄► `dataTable`  */
   const configTable = useMemo(() => ({
      actions: [{ icon: 'Detalle' }, { icon: 'Descargar' }],
      components: ({ action: { icon }, data: record }) => {
         if (icon === 'Detalle')
            return (
               <Tooltip
                  title={<Typography variant='h6' color='initial'>Ver detalle</Typography>}
                  placement='right-start'
                  arrow
               >
                  <IconButton
                     onClick={() => { handleActionDetalle(record) }}
                  >
                     <FindInPage />
                  </IconButton>
               </Tooltip>
            )
         else if(icon === 'Descargar'){
            return (
               <Tooltip
                  title='Descargar'
                  arrow
               >
                  <IconButton
                     disabled
                     onClick={() => { window.open(`${ENDPOINT_BASE}/microservicio-interpol/downloadInterpol/${record.archivo}`) }}
                  >
                     <GetApp />
                  </IconButton>
               </Tooltip>
            )
         }
      }
   }), [interpolDb])

   /*» ARGUMENT ◄► `dataTable`  */
   const dataTable = useMemo(() => ({
      columns: [
         { title: 'Pasaporte', field: 'pasaporte', width: 10, render: ({pasaporte}) => pasaporte.trim() || '-' },
         {
            title: 'Ciudadano', field: 'nombres', type: 'date', width: 70,
            render: ({ nombres, apellidos }) => `${nombres}, ${apellidos}`
         },
         { title: 'Nacionalidad', field: 'nacionalidad', width: 20 },
         {
            title: 'Fecha Emisión', field: 'fechaEmision', type: 'date', width: 15,
            render: ({ fechaEmision }) => format(new Date(fechaEmision), 'P', { locale: es })
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
      },
      validationSchema: Yup.object({
         nombres: Yup.string().required('¡Campo requerido!'),
         /* apellidos: Yup.string().required('¡Campo requerido!'), */
      }),
      onSubmit: (values) => { 
         handleFindByApprox(values) 
         console.log(values)
      },
   }

   return (
      <>
         <Content>
            {/* HEADER... */}
            <Fade clear>
               <Formik {...optFormik} >
                  {
                     ({ values: { nombres, apellidos, cedula, pasaporte } }) => (
                        <Form>
                           {/* <AppTitle name='» BUSCAR INTERPOL' align='left' size={1} color='#777' /> */}
                           <Paper elevation={10}>
                              <Box display='flex' justifyContent='space-between' p={2} height={75} >
                                 <MyTextField name='nombres' value={nombres} label='Nombres' size={20} />
                                 <MyTextField name='apellidos' value={apellidos} label='Apellidos' size={20} />
                                 <MyTextField name='cedula' value={cedula} label='N° Cédula' size={10} />
                                 <MyTextField name='pasaporte' value={pasaporte} label='N° Pasaporte' size={10} />
                              </Box>
                           </Paper>
                           <input type='submit' ref={rSubmit} hidden />
                           <input type='reset' ref={rReset} hidden />
                        </Form>
                     )
                  }
               </Formik>

               {/* » BODY */}
               <Box mt={.5}>
                  <Table
                     isLoading={interpolLoading}
                     dataTable={dataTable}
                     configTable={configTable}
                     pageSize={ 
                        currentScreen === breakpoints.desktop 
                           ? 6 
                           : currentScreen === breakpoints.desktopLarge
                              ? 11 
                              : 6 
                     }
                  />
               </Box>
            </Fade>
         </Content>

         {/*» FLOAT  */}
         <SpeedDial
            position='absolute'
            direction='right'
            opt={{bottom: 2}}
            optSpeedDialAction={optSpeedDialAction} 
         />

         {/*» MODAL  */}
         <SimpleModal open={openModal} setOpen={setOpenModal} >
            <AppTitle name='DATOS ADICIONALES' align='left' color='#777' size={1} />
            <InterpolDetalle data={detInterpolRecord} {...props} />
         </SimpleModal>
      </>
   )
}