import React, { useRef } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import {
   Paper,
   Button,
   Grid,
} from '@material-ui/core'
import SpeedDial from 'components/SpeedDial'
import { Save, DeleteForever } from '@material-ui/icons'
import * as Yup from 'yup'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { registrarProcNac } from 'redux/actions/procNacAction'
import ContentTitle from 'components/Styled/ContentTitle'
import AsignarProcedimientoNac from 'components/AsignarProcedimientoNac'
import MyTextField from 'components/Formik/MyTextField'
import MyAutocomplete from 'components/Formik/Autocomplete'

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

/*-> Formik-Component: NO CONTROLADO  */

const validationSchema = Yup.object({
   tipoDocumento: Yup.string().required('Campo requerido').nullable('¡Campo requerido!'),
   numeroDocumento: Yup.string().required('Campo requerido'),
   numeroTramite: Yup.string().required('Campo requerido'),
   administrado: Yup.string().required('Campo requerido'),
   nacionalidad: Yup.string().required('Campo requerido').nullable('Campo requerido'),
   correo: Yup.string().required('Campo requerido').email('¡Formato no valido!'),
   telefono: Yup.string().required('Campo requerido').min(9, '¡Almenos 9 dígitos!'),
   tipoSolicitud: Yup.string().required('Campo requerido').nullable('¡Campo requerido!'),
   tipoTramite: Yup.string().required('Campo requerido').nullable('¡Campo requerido!'),
})

const optTipoDocumento = [
   { idTipoTramite: 1, descripcion: 'Memorandum' },
   { idTipoTramite: 2, descripcion: 'Oficio' },
]

const optNacionalidad = [
   { idTipoTramite: 1, descripcion: 'Memorandum' },
   { idTipoTramite: 2, descripcion: 'Oficio' },
]

const initialValues = {
   tipoDocumento: '',
   numeroDocumento: '',
   numeroTramite: '',
   fechaInicioTramite: '',
   administrado: '',
   nacionalidad: '',
   domicilio: '',
   distrito: '',
   correo: '',
   telefono: '',
   tipoSolicitud: '',
   tipoTramite: ''
}

export default function RegistrarProcedimiento() {

   const dispatch = useDispatch()
   const rRegistrar = useRef()
   const rLimpiar = useRef()

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

   return (
      <>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(formData, meta) => {
               dispatch(registrarProcNac(formData))
            }}
            onReset={(values, meta) => {
               console.log(values)
            }}
         >
            {
               ({ ...rest }) =>
                  (
                     <Form>
                        <ContentTitle title='REGISTRO Y ASIGNACIÓN DE PROCEDIMIENTOS DE NACIONALIZACIÓN' />
                        <Paper elevation={1} style={{ padding: 15 }}>
                           <Container>
                              <Item>
                                 <MyAutocomplete name='tipoDocumento' label='Tipo documento' width={12} opt={optTipoDocumento} {...rest} />
                              </Item>
                              <Item>
                                 <MyTextField type='text' name='numeroDocumento' size={12} label="Número documento" />
                              </Item>
                              <Item>
                                 <MyTextField type='text' name='numeroTramite' size={15} label="Número trámite" />
                              </Item>
                              <Item>
                                 <MyTextField type='date' name='fechaInicioTramite' size={15} label="Fecha inicio tramite" />
                              </Item>
                              <Item>
                                 <MyTextField type='text' name='administrado' size={30} label="Administrado" />
                              </Item>
                              <Item>
                                 <MyAutocomplete name='nacionalidad' label='Nacionalidad' width={20} opt={optNacionalidad} {...rest} />
                              </Item>
                              <Item>
                                 <MyTextField type='text' name='distrito' size={20} label="Distrito" />
                              </Item>
                              <Item>
                                 <MyTextField type='mail' name='correo' size={25} label="Correo" />
                              </Item>
                              <Item>
                                 <MyTextField type='number' name='telefono' size={10} label="Telefono" />
                              </Item>
                              <Item>
                                 <MyAutocomplete name='tipoSolicitud' label='Tipo solicitud' width={15} opt={optTipoDocumento} {...rest} />
                              </Item>
                              <Item>
                                 <MyAutocomplete name='tipoTramite' label='Tipo trámite' width={30} opt={optNacionalidad} {...rest} />
                              </Item>
                              <Item style={{ width: '100%', }}>
                                 <SpeedDial direction='right' optSpeedDialAction={optSpeedDialAction} />
                              </Item>
                           </Container>
                           <Button type='submit' ref={rRegistrar} hidden />
                           <Button type='reset' ref={rLimpiar} hidden />
                        </Paper>
                     </Form>
                  )
            }
         </Formik>

         <Grid container>
            <Grid item xs={12}>
               <AsignarProcedimientoNac />
            </Grid>
         </Grid>
      </>
   )
}


