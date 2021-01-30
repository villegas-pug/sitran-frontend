import React, { useEffect, useState, useMemo } from 'react'
import MaterialTable from 'material-table'
import { Icons } from 'helpers/icons'

function Table(props) {

   const {
      dataTable: { columns, data },
      configTable: { actions, components },
      options,/*-> Default props...*/
      ...rest
   } = props

   const [state, setState] = useState({ columns })

   useEffect(() => { setState((prevState) => ({ ...prevState, data })) }, [data])

   return (
      <>
         {console.log('Tabla renderizada!!!')}
         <MaterialTable
            icons={Icons}
            options={{ ...options, ...rest }}
            localization={{ header: { actions: 'Acciones' }, pagination: { labelDisplayedRows: '{from}-{to} de {count}' } }}
            columns={state.columns}
            data={state.data}
            actions={actions}
            components={{ Action: components }}
         />
      </>
   )
}

Table.defaultProps = {
   options: {
      pageSizeOptions: false,
      /* paginationType: "stepped", */
      sorting: true,
      maxBodyHeight: 400,
      pageSize: 4,
      rowStyle: { fontSize: 10, textTransform: 'uppercase' },
      toolbar: false,
      search: false,
      showTitle: false,
      showEmptyDataSourceMessage: false,
      searchFieldAlignment: "left"
   }
}
export default React.memo(Table, (prevProps, nextProps) => {
   return prevProps.dataTable === nextProps.dataTable
})