import React from 'react'
import Menu from 'components/Menu'
import useComponent from 'hooks/useComponent'
import SimpleCard from 'components/SimpleCard'
import Flash from 'react-reveal/Flash'

export default function UtilidadesMod() {

   /*-> HOOK'S ... */
   const { subModulo: subModuloDb } = useComponent('UTILIDADES')

   return (
      <Flash>
         <Menu>
            {
               subModuloDb?.map(({ nombre, descripcion, pathImg, path }) => (
                  <SimpleCard key={nombre} title={nombre} description={descripcion} pathImg={pathImg} path={path} />
               ))
            }
         </Menu>
      </Flash>
   )
}
