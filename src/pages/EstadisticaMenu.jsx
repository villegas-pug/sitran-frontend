import React from 'react'
import Flash from 'react-reveal/Flash'

import Menu from 'components/Menu'
import SimpleCard from 'components/SimpleCard'

import useModulo from 'hooks/useModulo'

export default function EstadisticaMenu() {

   /*» HOOK'S  */
   const { subModulo } = useModulo('ESTADÍSTICAS')

   return (
      <Flash>
         <Menu>
            {
               subModulo?.map(({ nombre, descripcion, pathImg, path }) => (
                  <SimpleCard title={nombre} descripcion={descripcion} pathImg={pathImg} path={path} />
               ))
            }
         </Menu>
      </Flash>
   )
}
