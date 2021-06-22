import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
   findUserByLogin,
   login,
   logout,
   updatePasswordByLogin
} from 'redux/actions/usuarioAction'

export default function useAuth(){

   /*» STORE-HOOK'S  */
   const { 
      loading: authLoading,
      token,
      userCredentials,
   } = useSelector(store => store.usuario)
   const dispatch = useDispatch()

   /*» HOOK'S... */
   const [procedimientoAuthenticated, setProcedimientoAuthenticated] = useState([])
   const [modAuthenticated, setModAuthenticated] = useState([])
   const [submodAuthenticated, setSubmodAuthenticated] = useState([])
   const [pathAuthenticated, setPathAuthenticated] = useState([])

   /*» EFFECT'S */
   useEffect(() => {
      let procedimientoDb = []
      userCredentials?.usrProcedimiento?.map(({procedimiento}) => { procedimientoDb.push(procedimiento) })
      setProcedimientoAuthenticated(procedimientoDb)
   }, [userCredentials])
   
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
      modAuthenticated.map(({ nombre: nombreMod, rutaMod: rutaModFromMap }) => {
         procedimientoAuthenticated
            .filter(({tipo}) => tipo === 'SUB_MODULO')
            .filter(({rutaMod}) => rutaModFromMap === rutaMod)
            .map((record) => { 
               submod[nombreMod] = typeof(submod[nombreMod]) !== 'undefined' 
                  ? [...submod[nombreMod], record] 
                  : [record] 
            })
      }) 
      setSubmodAuthenticated(submod)
   }, [modAuthenticated])

   /*» HANDLER'S  */
   const handleFindUserByLogin = () => { dispatch(findUserByLogin()) }
   const handleLogin = (cred) => { dispatch(login(cred)) }
   const handleLogout = () => { dispatch(logout()) }
   const handleUpdatePasswordByLogin = (cred) => { dispatch(updatePasswordByLogin(cred)) }

   return {
      isAuthenticated: Boolean(Object.values(userCredentials).length),
      token,
      authLoading,
      userCredentials,

      procedimientoAuthenticated,
      modAuthenticated,
      submodAuthenticated,
      pathAuthenticated,

      handleFindUserByLogin,
      handleUpdatePasswordByLogin,
      handleLogin,
      handleLogout
   }
}