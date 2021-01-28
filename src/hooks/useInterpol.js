import { useSelector, useDispatch } from 'react-redux'
import { obtenerInterpolApprox, obtenerInterpol } from 'redux/actions/interpolAction'

export default function useInterpol() {
   /*» STORE ...  */
   const { interpol: { loading, error, data: interpolDb } } = useSelector(store => store)
   const dispatch = useDispatch()

   /*» CUSTOM HOOKiS  */
   /*» EFFECT'S  */

   /*» HANDLER'S  */
   const handleFindByApprox = (payload) => { dispatch(obtenerInterpolApprox(payload)) }
   const handleFindAll = () => { dispatch(obtenerInterpol()) }

   return {
      interpolDb,
      loading,
      error,
      handleFindAll,
      handleFindByApprox
   }
}
