import React, { useMemo } from 'react'
import Table from 'components/Table'
import {
   Tooltip,
   IconButton,
   FormControlLabel,
   Switch,
   Paper
} from '@material-ui/core'
import { Edit, Update, DeleteForever } from '@material-ui/icons'
import styled from 'styled-components'
import SpeedDial from 'components/SpeedDial'

const Container = styled.div`
   margin-top: .5rem;   
`

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

export default function AsignarProcedimientoNac() {

   /*-> Configuración la tabla... */
   /*----------------------------------------------------------------------*/
   const configTable = useMemo(() => ({
      actions: [{ icon: 'Editar' }, { icon: 'Exportar Excel' }],
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
            /* (<ButtonToExcel rowData={data} />) */
         }
      }
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

   const handlerActionEditar = (caja) => {

   }
   /*---------------------------------------------------------------------------------------------*/
   return (
      <Container>
         <Paper elevation={5} style={{ marginBottom: 1, padding: '0 10px 0 10px', display: 'inline-block' }}>
            <FormControlLabel
               control={<Switch size='medium' color='primary' />}
               label='Asignados'
            />
         </Paper>
         <Table dataTable={dataTable} configTable={configTable} />
         <div style={{ width: '100%', marginTop: 5 }}>
            <SpeedDial direction='right' optSpeedDialAction={optSpeedDialAction} />
         </div>
      </Container>
   )
}