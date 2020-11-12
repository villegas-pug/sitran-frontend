import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Formik, Form, useField, Field } from 'formik'
import { Paper, FormControl, TextField, Select, MenuItem, InputLabel, FormHelperText, Button } from '@material-ui/core'
import SpeedDial from 'components/SpeedDial'
import { Autocomplete } from '@material-ui/lab'
import { Save, DeleteForever } from '@material-ui/icons'
import * as Yup from 'yup'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { registrarProcNac } from 'redux/actions/procNacAction'

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 1rem;
   min-height: 8rem;
   justify-content: space-between;
   align-items: center;
`

const Item = styled.div`
   height: 5rem;
`

/*-> Formik-Component: CONTROLADO  */
const MyTextField = ({ type, size, label, ...rest }) => {
   const [propsField, meta] = useField(rest)
   const err = (meta.touched && meta.error) ? meta.error : ''
   return (
      <TextField
         {...propsField}
         type={type}
         variant='outlined'
         size='small'
         style={{ width: `${size}rem` }}
         label={label}
         error={Boolean(err)}
         InputLabelProps={{
            shrink: true
         }}
         helperText={err}
         autoComplete='off'
      />
   )
}

/*-> Formik-Component: CONTROLADO  */
const MySelect = ({ width, opt, label, ...rest }) => {
   const [propsField, meta] = useField(rest)
   const err = meta.touched && meta.error ? meta.error : ''
   return (
      <FormControl variant='outlined' size='small' error={Boolean(err)}>
         <InputLabel htmlFor='select'>{label}</InputLabel>
         <Select
            {...propsField}
            label={label}
            style={{ width: `${width}rem` }}
            inputProps={{
               id: 'select',
            }}
         >
            {
               opt.map((item, i) => {
                  var values = Object.values(item)
                  return (
                     <MenuItem key={i} value={values[0]}>{values[1]}</MenuItem>
                  )
               })
            }
         </Select>
         <FormHelperText>{err}</FormHelperText>
      </FormControl>
   )
}

/*-> Formik-Component: NO CONTROLADO  */
const MyAutocomplete = ({ name, label, width, opt, setFieldValue, errors, values }) => {
   const [touched, setTouched] = useState(false)
   const err = _.get(errors, name) && touched ? _.get(errors, name) : ''

   const entity = _.get(values, name)
   const value = entity ? Object.values(entity)[1] : ''

   console.log(value)
   return (
      <Autocomplete
         inputValue={value}
         options={opt}
         getOptionLabel={(entity) => (Object.values(entity)[1])}
         onChange={(e, entity) => setFieldValue([name], entity)}
         onBlur={() => { setTouched(true) }}
         style={{ width: `${width}rem` }}
         renderInput={(params) => (
            <Field
               {...params}
               error={Boolean(err)}
               label={label}
               as={TextField}
               variant="outlined"
               size='small'
               helperText={err}
            />
         )}
      />
   )
}

const validationSchema = Yup.object({
   tipoDocumento: Yup.string().required('Campo requerido'),
   numeroDocumento: Yup.string().required('Campo requerido'),
   numeroTramite: Yup.string().required('Campo requerido'),
   administrado: Yup.string().required('Campo requerido'),
   nacionalidad: Yup.string().required('Campo requerido').nullable('Campo requerido'),
   correo: Yup.string().required('Campo requerido').email('¡Formato no valido!'),
   telefono: Yup.string().required('Campo requerido').min(9, '¡Almenos 9 dígitos!'),
   tipoSolicitud: Yup.string().required('Campo requerido'),
   tipoTramite: Yup.string().required('Campo requerido'),
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
         <SpeedDial direction='right' optSpeedDialAction={optSpeedDialAction} />
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
                           </Container>
                           <Button type='submit' ref={rRegistrar} hidden />
                           <Button type='reset' ref={rLimpiar} hidden />
                        </Paper>
                     </Form>
                  )
            }
         </Formik>
      </>
   )
}