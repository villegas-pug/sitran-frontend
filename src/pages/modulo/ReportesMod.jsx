import React from 'react'
import Flash from 'react-reveal/Flash'

import Menu from 'components/Menu'
import SimpleCard from 'components/SimpleCard'

import useComponent from 'hooks/useComponent'

export default function ReportesMod() {

   /*» HOOK'S  */
   const { subModulo } = useComponent('REPORTES')

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
