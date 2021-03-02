import React from 'react'
import Menu from 'components/Menu'

import useComponent from 'hooks/useComponent'
import SimpleCard from 'components/SimpleCard'
import Flash from 'react-reveal/Flash'

export default function ProcesosMod() {

   const { subModulo } = useComponent('PROCESOS')

   return (
      <Flash>
         <Menu>
            {
               subModulo?.map(({ nombre, descripcion, pathImg, path }) => (
                  <SimpleCard title={nombre} description={descripcion} pathImg={pathImg} path={path} />
               ))
            }
         </Menu>
      </Flash>
   )
}
