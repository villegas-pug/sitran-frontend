import React, { useState, useRef, useMemo, useEffect } from 'react'
import {
   Paper,
   Box,
   Tooltip,
   IconButton, Switch, FormControlLabel,
} from '@material-ui/core'
import {
   FindInPage,
   Update,
   DeleteSweep,
} from '@material-ui/icons'
import Flash from 'react-reveal/Flash'
import Fade from 'react-reveal/Fade'
import { ClockLoader } from 'react-spinners'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

import MyTextField from 'components/Formik/MyTextField'
import AppTitle from 'components/Styled/AppTitle'
import Table from 'components/Table'
import useModal from 'hooks/useModal'
import InterpolDetalle from 'components/InterpolDetalle'
import useOperativo from 'hooks/useOperativo'
import FloatPallet from 'components/FloatPallet'
import FormGroup from 'components/Styled/FormGroup'
import SimpleModal from 'components/SimpleModal'

export default function BuscarOperativoSubMod(props) {

   /*» HOOK'S...*/
   const rSubmit = useRef()
   const rReset = useRef()
   const [checked, setChecked] = useState(false)

   /*» CUSTOM HOOK'S ... */
   const { loading, operativoDb, handleFindByApprox } = useOperativo()
   const [setContentModal] = useModal({
      title: <AppTitle name='DATOS ADICIONALES DEL EXTRANJERO' align='left' color='#777' size={1} />, width: 950
   })

   /*» EFFECT'S ... */
   useEffect(() => { }, [])

   /*» HANDLER'S ...  */
   const handleActionDetalle = (rowData) => {
      setContentModal(
         <InterpolDetalle data={rowData} {...props} />
      )
   }

   const handleOnChecked = ({ target: { checked } }) => { setChecked(checked) }

   /*» DEPENDENCY'S  */
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
   }), [operativoDb])


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
      data: operativoDb
   }), [operativoDb])

   const optFrm = {
      initialValues: {
         nombres: '',
         apellidos: '',
      },
      validationSchema: Yup.object({
         nombres: Yup.string().required('¡Campo requerido!').min(4, '¡Mínimo 4 caracteres!'),
      }),
      onSubmit: (values, meta) => { handleFindByApprox(values) },
   }

   return (
      <>
         {/* HEADER... */}
         <AppTitle name='» BUSCAR OPERATIVO' align='left' size={1} color='#777' />
         <FormControlLabel
            label='Filtrar'
            control={
               <Switch
                  color='primary'
                  checked={checked}
                  onChange={handleOnChecked}
               />
            }
         />

         {
            checked && (
               <Fade top>
                  <Formik {...optFrm}>
                     {
                        ({ values: { nombres } }) => (
                           <Form>
                              <Paper elevation={5} style={{ padding: 5 }} >
                                 <Box display='flex' justifyContent='flex-start'  >
                                    <FormGroup>
                                       <MyTextField name='nombres' value={nombres} label='Nombres' size={25} />
                                    </FormGroup>
                                 </Box>
                              </Paper>
                              <input type='submit' ref={rSubmit} hidden />
                              <input type='reset' ref={rReset} hidden />
                           </Form>
                        )
                     }
                  </Formik>
               </Fade>
            )
         }

         {/* » BODY */}
         <Box mt={.5}>
            {
               loading
                  ? (
                     <Paper variant='outlined' >
                        <Box display='flex' justifyContent='center' alignItems='center' height={200}>
                           <ClockLoader color='#999' size={50} />
                        </Box>
                     </Paper>
                  )
                  : (
                     operativoDb.length === 0
                        ? (
                           <Paper variant='outlined'>
                              <Box display='flex' justifyContent='center' alignItems='center' height={200}>
                                 <AppTitle name='««« No hay datos para mostrar »»»' color='#666' size={1} />
                              </Box>
                           </Paper>
                        )
                        : (
                           <Fade clear>
                              <Table
                                 dataTable={dataTable}
                                 configTable={configTable}
                              /* pageSize={breakpoints[currentBreakpoint] >= breakpoints.desktopLarge ? 10 : 5} */
                              />
                           </Fade>
                        )
                  )
            }
         </Box>

         {/*-> FLOAT */}
         <FloatPallet>
            <Tooltip title='Buscar' placement='left' arrow>
               <IconButton >
                  <FindInPage fontSize='large' />
               </IconButton>
            </Tooltip>
            <Tooltip title='Refrescar' placement='left' arrow>
               <IconButton >
                  <Update fontSize='large' />
               </IconButton>
            </Tooltip>
            <Tooltip title='Buscar' placement='left' arrow>
               <IconButton >
                  <DeleteSweep fontSize='large' />
               </IconButton>
            </Tooltip>
         </FloatPallet>

         {/*» MODAL  */}

         <SimpleModal />
      </>
   )
}