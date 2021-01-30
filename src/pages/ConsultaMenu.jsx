import React from 'react'
import Menu from 'components/Menu'
import useModulo from 'hooks/useModulo'
import SimpleCard from 'components/SimpleCard'
import Flash from 'react-reveal/Flash'

export default function ConsultaMenu() {

   /*-> HOOK'S ... */
   const { subModulo: subModuloDb } = useModulo('CONSULTAS')

   return (
      <Flash>
         <Menu>
            {
               subModuloDb?.map(({ icon, nombre, descripcion, tooltip, pathImg, path }) => (
                  <SimpleCard key={nombre} title={nombre} descripcion={descripcion} pathImg={pathImg} path={path} />
               ))
            }
         </Menu>
      </Flash>
   )
}
