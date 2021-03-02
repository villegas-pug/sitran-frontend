import React from 'react'
import SimpleCard from 'components/SimpleCard'
import Flash from 'react-reveal/Flash'
import Menu from 'components/Menu'
import { Box } from '@material-ui/core'

const components = [
   { name: 'Crear Normativa', descripcion: 'Componente en mantenimiento.', pathImg: '', pathImg: '/static/img/cards/plantillas.jpg', path: '/normativa-crear' },
   { name: 'Visualizar Normativa', descripcion: 'Componente en mantenimiento.', pathImg: '', pathImg: '/static/img/cards/plantillas.jpg', path: '/normativa-visualizar' },
   { name: 'Aprobar Normativa', descripcion: 'Componente en mantenimiento.', pathImg: '', pathImg: '/static/img/cards/plantillas.jpg', path: '/normativa-aprobacion' },
]

export default function LineamientosMod() {
   return (
      <>
         <Flash>
            <Menu>
               {
                  components.map(({ name, descripcion, pathImg, path }, i) => (
                     <SimpleCard key={i} title={name} description={descripcion} pathImg={pathImg} path={descripcion, path} />
                  ))
               }
            </Menu>
         </Flash>
      </>
   )
}