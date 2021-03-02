import { useSelector, useDispatch } from "react-redux"

import {
   handleInputOnChange,
   handleInputsReset,
   saveOperativo
} from 'redux/actions/operativoAction'

export default function useOperativo() {

   /*» STORE HOOK'S  */
   const dispatch = useDispatch()
   const { operativo: { loading, data: operativoDb, inputValues } } = useSelector(store => store)

   /*» HANDLER'S */
   /*» Input's ... */
   const handleChangeInputControlled = ({ target: { name, value } }) => { dispatch(handleInputOnChange({ [name]: value })) }

   /*» Inputs: <Autocomplete /> | <Select /> ... */
   const handleChangeInputUncontrolled = (meta) => { dispatch(handleInputOnChange(meta)) }

   const handleInputOnReset = () => { dispatch(handleInputsReset()) }

   const handleSaveOperativo = () => { dispatch(saveOperativo()) }

   const handleFindByApprox = (payload) => { console.log('handleFindByApprox()!!!') }

   return {
      operativoDb,
      loading,
      inputValues,

      handleChangeInputControlled,
      handleChangeInputUncontrolled,
      handleInputOnReset,
      handleSaveOperativo,
      handleFindByApprox
   }
}