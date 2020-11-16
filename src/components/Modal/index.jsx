import React, { useState } from 'react'
import { Modal, Button } from 'antd'


export default function MyModal({ title, visible, setVisible, children, ...rest }) {

   const handleOk = e => setVisible(false)
   const handleCancel = e => setVisible(false)

   return (
      <>
         <Modal
            title={title}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
         >
            {children}
         </Modal>
      </>
   )
}