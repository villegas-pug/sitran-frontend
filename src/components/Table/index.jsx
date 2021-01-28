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
            columns={state.columns}
            data={state.data}
            editable={{
               /* onRowAdd: (newData) =>
                  new Promise((resolve) => {
                     setTimeout(() => {
                        resolve();
                        setState((prevState) => {
                           const data = [...prevState.data];
                           data.push(newData);
                           return { ...prevState, data };
                        });
                     }, 600);
                  }), */
               /* onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                     setTimeout(() => {
                        resolve();
                        if (oldData) {
                           setState((prevState) => {
                              const data = [...prevState.data];
                              data[data.indexOf(oldData)] = newData;
                              return { ...prevState, data };
                           });
                        }
                     }, 600);
                  }), */
               /* onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                     setTimeout(() => {
                        resolve();
                        setState((prevState) => {
                           const data = [...prevState.data];
                           data.splice(data.indexOf(oldData), 1);
                           return { ...prevState, data };
                        });
                     }, 600);
                  }), */
            }}
            actions={actions}
            components={{ Action: components }}
         />
      </>
   )
}

Table.defaultProps = {
   options: {
      pageSizeOptions: false,
      paginationType: "stepped",
      sorting: true,
      maxBodyHeight: 600,
      pageSize: 6,
      search: false,
      showTitle: false,
      showEmptyDataSourceMessage: false,
      searchFieldAlignment: "left"
   }
}
export default React.memo(Table, (prevProps, nextProps) => {
   return prevProps.dataTable === nextProps.dataTable
})