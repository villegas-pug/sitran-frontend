import { useSelector, useDispatch } from 'react-redux'
import { 
   obtenerInterpolApprox, 
   obtenerInterpol, 
   saveInterpoPdf 
} from 'redux/actions/interpolAction'

import Noty from 'helpers/noty'
import { WARNING } from 'constants/levelLog'

export default function useInterpol() {
   /*» STORE ...  */
   const { interpol: { 
      loading: interpolLoading, 
      error, 
      data: interpolDb,
      interpolPdf: {
         loading: interpolPdfLoading,
         data: interpolPdfDb
      }
   } } = useSelector(store => store)
   const dispatch = useDispatch()

   /*» CUSTOM HOOKiS  */
   /*» EFFECT'S  */

   /*» HANDLER'S  */
   const handleFindByApprox = (payload) => { dispatch(obtenerInterpolApprox(payload)) }
   const handleFindAll = () => { dispatch(obtenerInterpol()) }
   const handleSaveFile = (file) => { 
      if (interpolPdfLoading) Noty(WARNING, '¡Hay otro proceso en curso!')
      else dispatch(saveInterpoPdf(file)) 
   }

   return {
      interpolLoading,
      interpolDb,
      interpolPdfLoading,
      interpolPdfDb,

      error,

      handleFindAll,
      handleFindByApprox,
      handleSaveFile
   }
}
