import { useState } from 'react'

import Noty from 'helpers/noty'
import { ERROR } from 'constants/levelLog'

export default function useLocalStorage(key){

   /*» HOOK'S  */
   const [item, setItem] = useState(() => {
      try {
         return window.localStorage.getItem(key) 
            ? JSON.stringify(window.localStorage.getItem(key)) 
            : null
      } catch (err) {
         Noty(ERROR, err)
         return null
      }
   })

   /*» HANDLER'S  */
   const setItemFromLocalStorage = (newItem) => (window.localStorage.setItem(key, newItem), setItem(newItem))
   const removeItemFromLocalStorage = () => { window.localStorage.removeItem(key) }
   const removeAllFromLocalStorage = () => { window.localStorage.clear() }

   return [
      item,
      setItemFromLocalStorage,
      removeItemFromLocalStorage,
      removeAllFromLocalStorage
   ]
}