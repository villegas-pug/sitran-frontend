import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
   findUserByLogin,
   login,
   logout,
   updatePasswordByLogin
} from 'redux/actions/usuarioAction'

import { 
   ITEM, 
   MODULO, 
   SUB_ITEM, 
   SUB_MODULO 
} from 'constants/componentType'

export default function useAuth(){

   /*» STORE-HOOK'S  */
   const { 
      loading: authLoading,
      token,
      userCredentials,
   } = useSelector(store => store.usuario)
   const dispatch = useDispatch()

   /*» HOOK'S... */
   const [componentsAuth, setComponentsAuth] = useState([])
   const [redirectComponentsAuth, setRedirectComponentsAuth] = useState([])
   const [modAuthenticated, setModAuthenticated] = useState([])
   const [submodAuthenticated, setSubmodAuthenticated] = useState([])
   const [pathAuthenticated, setPathAuthenticated] = useState([])

   /*» EFFECT'S */
   useEffect(() => {
      Object.keys(userCredentials).length
         && setComponentsAuth(userCredentials.usrProcedimiento.map(({procedimiento}) => procedimiento))
   }, [userCredentials])

   useEffect(() => {
      Object.keys(userCredentials).length
         && setRedirectComponentsAuth(
            userCredentials.usrProcedimiento
               .filter(({procedimiento: { tipo }}) => tipo !== ITEM && tipo !== SUB_ITEM)
               .map(({procedimiento}) => procedimiento)
         )
   }, [userCredentials])
   
   useEffect(() => {
      setPathAuthenticated(
         componentsAuth?.reduce((map, { nombre, rutaPrincipal }) => (map[nombre] = rutaPrincipal, map), {})
      )
   }, [componentsAuth])

   useEffect(() => {
      setModAuthenticated(componentsAuth?.filter(({ tipo }) => tipo === MODULO))
   }, [componentsAuth])

   useEffect(() => {
      let submod = {}
      modAuthenticated?.map(({ nombre: nombreMod, rutaMod: rutaModFromMap }) => {
         componentsAuth
            .filter(({tipo}) => tipo === SUB_MODULO)
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

      componentsAuth,
      redirectComponentsAuth,
      modAuthenticated,
      submodAuthenticated,
      pathAuthenticated,

      handleFindUserByLogin,
      handleUpdatePasswordByLogin,
      handleLogin,
      handleLogout
   }
}