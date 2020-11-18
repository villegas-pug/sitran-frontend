import { useMemo } from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store'
import { useState, useEffect } from 'react'
import { Modal } from 'antd';

const typeModal = ['confirm', 'error', 'warning', 'info', 'success']

export default function App({ type, title, width }) {

   const [content, setContent] = useState(null)
   const [onOk, setOnOk] = useState(false)

   useEffect(() => {
      content && handleModal()
      return () => setOnOk(false)
   }, [content])

   const opt = {
      title: title,
      content: (
         <Provider store={store}>
            {content}
         </Provider>
      ),
      width: width,
      okType: 'ghost',
      onOk: () => { setOnOk(true) }
   }

   const handleModal = () => {
      switch (type) {
         case typeModal[0]:
            Modal.confirm(opt)
            break
         case typeModal[1]:
            Modal.error(opt)
            break
         case typeModal[2]:
            Modal.warning(opt)
            break
         case typeModal[4]:
            Modal.success(opt)
            break
         default:
            Modal.info(opt)
            break
      }
   }

   return [
      setContent,
      onOk
   ]
}