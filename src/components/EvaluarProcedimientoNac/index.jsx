import React, { useRef, useMemo } from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import {
   Paper,
   Button,
   Grid,
} from '@material-ui/core'
import SpeedDial from 'components/SpeedDial'
import { Save, DeleteForever, Update } from '@material-ui/icons'
import * as Yup from 'yup'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { registrarProcNac } from 'redux/actions/procNacAction'
import ContentTitle from 'components/Styled/ContentTitle'
import MyTextField from 'components/Formik/MyTextField'
import MyAutocomplete from 'components/Formik/Autocomplete'
import { Modal, Button as ButtonAntd } from 'antd'
import { SaveOutlined, PropertySafetyOutlined, DeleteFilled, InteractionFilled, ToolFilled } from '@ant-design/icons'
import Table from 'components/Table'
import PaletteButtonsAntd from 'components/PaletteButtonsAntd'


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

const optSpeedDialAction = [
   {
      icon: <Update />,
      tooltip: 'Refrescar',
      handleOnClick: () => { alert('Test de prueba!') }
   }, {
      icon: <DeleteForever />,
      tooltip: 'Limpiar',
      handleOnClick: () => { alert('Test de prueba!') }
   },
]

export default function EvaluarProcedimientoNac() {

   const dispatch = useDispatch()
   const rRegistrar = useRef()
   const rLimpiar = useRef()

   const configTable = useMemo(() => ({
      /* actions: [{ icon: 'Editar' }, { icon: 'Exportar Excel' }],
      components: ({ action: { icon }, data }) => {
         if (icon === 'Editar')
            return (
               <Tooltip
                  title='Editar'
                  arrow
               >
                  <IconButton
                     onClick={() => { handlerActionEditar(data) }}
                  >
                     <Edit />
                  </IconButton>
               </Tooltip>)
         else if (icon === 'Exportar Excel') {
            return
            (<ButtonToExcel rowData={data} />)
         }
      } */
   }), [])

   const dataTable = useMemo(() => ({
      columns: [
         { title: 'Nro', field: 'idProcNac', type: 'number', width: 10 },
         /* { title: 'Tipo documento', field: 'tipoDocumento', width: 25 }, */
         { title: 'Número documento', field: 'numeroDocumento', width: 15 },
         /* { title: 'Número trámite', field: 'numeroTramite', width: 20 }, */
         { title: 'Administrado', field: 'administrado', width: 50 },
         /* { title: 'Nacionalidad', field: 'nacionalidad', width: 30 }, */
         /* { title: 'Tipo solicitud', field: 'tipoSolicitud', width: 20 }, */
         { title: 'Tipo trámite', field: 'tipoTramite', width: 50 },
         { title: 'Registro', field: 'fechaRegistro', type: 'date', width: 15 },
         { title: 'Evaluador', field: 'usrEvaluador', width: 25 },
         { title: 'Asignación', field: 'fechaAsignacionTramite', type: 'date', width: 15 },
         { title: 'Estado actual', field: 'estadoActual', width: 10 },
         { title: 'Etapa actual', field: 'etapaActualProcNac', width: 10 },
         { title: 'completo', field: 'completo', type: 'string', width: 10 },
         /* { title: 'Operador', field: 'operador', width: 350, render: ({ operador: { nombre } }) => nombre }, */

      ],
      data: []
   }), [])

   const optFloatPalette = [
      {
         title: 'Guardar',
         icon: SaveOutlined,
         loading: false,
         handleClick: () => console.log('Este es un mensaje de prueba!!!'),
      }, {
         title: 'Guardar',
         icon: PropertySafetyOutlined,
         loading: false,
         handleClick: () => console.log('Este es un mensaje de prueba!!!'),
      }, {
         title: 'Guardar',
         icon: DeleteFilled,
         loading: false,
         handleClick: () => console.log('Este es un mensaje de prueba!!!'),
      }, {
         title: 'Guardar',
         icon: InteractionFilled,
         loading: false,
         handleClick: () => console.log('Este es un mensaje de prueba!!!'),
      }, {
         title: 'Guardar',
         icon: ToolFilled,
         loading: false,
         handleClick: () => console.log('Este es un mensaje de prueba!!!'),
      },
   ]

   return (
      <>

         <ContentTitle title='PROCEDIMIENTOS RECIBIDO PARA EVALUCIÓN' />

         <Grid container wrap='nowrap'>
            <Grid item style={{ width: '3rem' }}>
               <PaletteButtonsAntd optFloatPalette={optFloatPalette} />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
               <Table dataTable={dataTable} configTable={configTable} />
            </Grid>
         </Grid>

         <Modal
         >
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
         </Modal>
      </>
   )
}


