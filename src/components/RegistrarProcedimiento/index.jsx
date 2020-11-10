import React from 'react'
import styled from 'styled-components'
import { Formik, Form, useField, FieldArray, Field } from 'formik'
import { TextField, Select, MenuItem } from '@material-ui/core'

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   outline: 1px solid red;
   padding: 1rem;
`

const MyFieldText = ({ size, label, ...rest }) => {
   const [propsField, meta] = useField(rest)
   const err = (meta.touched && meta.error) ? meta.error : ''
   return (
      <TextField
         {...propsField}
         variant='outlined'
         size='small'
         style={{ width: `${size}rem`, color: '#999' }}
         label={label}
         error={Boolean(err)}
         helperText={err}
      />
   )
}

const initialValues = {
   tipoDocumento: [
      { idTipoTramite: 1, descripcion: 'Nacionalización' },
      { idTipoTramite: 2, descripcion: 'Inmigración' },
   ],
   numeroDocumento: '',
   numeroTramite: '',
   fechaInicioTramite: '',
   administrado: '',
   idNacionalidad: '',
   domicilio: '',
   idDistrito: '',
   correo: '',
   telefono: '',
   idTipoSolicitud: '',
   idTipoTramite: '',
   fechaRegistro: '',
   usrEvaluador: '',
   fechaAsignacionTramite: '',
   idEstadoActual: '',
   idEtapaActualProcNac: '',
   completo: '',
}


export default function RegistrarProcedimiento() {
   return (
      <Formik
         initialValues={initialValues}
      >
         {
            ({ values: { numeroTramite, tipoDocumento } }) =>
               (
                  <Form>
                     <Container>
                        <MyFieldText name='numeroTramite' size={15} label="Número de trámite" value={numeroTramite} />



                        <FieldArray
                           name='tipoDocumento'
                        >
                           {() => (

                              <Field
                                 name='tipoDocumentoe'
                                 type='select'
                                 as={Select}
                              >
                                 {
                                    tipoDocumento.map(({ idTipoDocumento, descripcion }, i) => (
                                       <MenuItem value={idTipoDocumento}>{descripcion}</MenuItem>
                                    ))
                                 }
                              </Field>
                           )}
                        </FieldArray>
                        {tipoDocumento}
                     </Container>
                  </Form>
               )
         }
         {}
      </Formik>
   )
}