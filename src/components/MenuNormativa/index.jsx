import React from 'react'
import { Grid } from '@material-ui/core'
import SimpleCard from 'components/SimpleCard'
import Flash from 'react-reveal/Flash'

const components = [
   { name: 'Crear Normativa', path: '/normativa-crear' },
   { name: 'Visualizar Normativa', path: '/normativa-visualizar' },
   { name: 'Aprobar Normativa', path: '/normativa-aprobacion' },
]

export default function MenuNormativa() {
   return (
      <>
         <Flash>
            <Grid container spacing={5}>
               {
                  components.map(({ name, path }, i) => (
                     <Grid item xs={6}>
                        <SimpleCard key={i} title={name} path={path} width={550} height={220} />
                     </Grid>
                  ))
               }
            </Grid>
         </Flash>
      </>
   )
}