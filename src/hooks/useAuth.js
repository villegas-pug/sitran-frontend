import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { findUserByLogin } from 'redux/actions/usuarioAction'

export default function useAuth(){

   /*» STORE-HOOK'S  */
   const { loading: authLoading, data: userAuthenticated } = useSelector(store => store.usuario)
   const dispatch = useDispatch()

   /*» HOOK'S  */
   const [procedimientoAuthenticated, setProcedimientoAuthenticated] = useState([])
   const [modAuthenticated, setModAuthenticated] = useState([])
   const [submodAuthenticated, setSubmodAuthenticated] = useState([])
   const [pathAuthenticated, setPathAuthenticated] = useState([])

   /*» EFFECT'S */
   useEffect(() => {
      let procedimientoDb = []
      userAuthenticated?.length > 0 
         && userAuthenticated.map(({usrProcedimiento}) => (
            usrProcedimiento.map(({procedimiento}) => { procedimientoDb.push(procedimiento) })
         ))
      setProcedimientoAuthenticated(procedimientoDb)
   }, [userAuthenticated])
   
   useEffect(() => {
      setPathAuthenticated(
         procedimientoAuthenticated.reduce((map, { nombre, rutaPrincipal }) => (map[nombre] = rutaPrincipal, map), {})
      )
   }, [procedimientoAuthenticated])

   useEffect(() => {
      setModAuthenticated(procedimientoAuthenticated.filter(({ tipo }) => tipo === 'MODULO'))
   }, [procedimientoAuthenticated])

   useEffect(() => {
      let submod = {}
      modAuthenticated.map(({ nombre, rutaMod: rutaModFromMap }) => {
         procedimientoAuthenticated
            .filter(({tipo}) => tipo === 'SUB_MODULO')
            .filter(({rutaMod}) => rutaMod === rutaModFromMap)
            .map(({...rest}) => { 
               submod[nombre] = typeof(submod[nombre]) !== 'undefined' 
                  ? [...submod[nombre], rest] 
                  : [rest] 
            })
      }) 
      
      setSubmodAuthenticated(submod)
   }, [modAuthenticated])

   /*» HANDLER'S  */
   const handleFindUserByLogin = () => { dispatch(findUserByLogin()) }

   return {
      authLoading,
      userAuthenticated,
      procedimientoAuthenticated,
      modAuthenticated,
      submodAuthenticated,
      pathAuthenticated,

      handleFindUserByLogin
   }
}