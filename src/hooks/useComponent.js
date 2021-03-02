import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function useComponent(payload) {/*-> Recibe como argumento el nombre del módulo...  */

   /*-> HOOK'S STORE  */
   const { modulo: { data: moduloDb } } = useSelector(store => store)

   /*-> HOOK'S  */
   const [modulo, setModulo] = useState(null)
   const [subModulo, setSubModulo] = useState(null)

   /*-> EFFECT'S  */
   useEffect(() => { handleModule() }, [payload])

   useEffect(() => {
      modulo && handleSubModulo()
   }, [modulo])

   /*» HANDLER'S  */
   const handleModule = () => { setModulo(moduloDb.find(mod => mod.nombre === payload)) }
   const handleSubModulo = () => { setSubModulo(modulo?.subModulo) }

   return {
      subModulo
   }

}