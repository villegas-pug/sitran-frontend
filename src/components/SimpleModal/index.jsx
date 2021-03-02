import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'


const Container = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
`

const Body = styled.div`
   position: relative;
   top: 25%;
   margin: auto;
   width: 20rem;
   height: 20rem;
   background-color: #fff;
   outline: 1px solid red;
`

export default function SimpleModal({ children }) {

   /*» HOOK'S  */
   const [open, setOpen] = useState(true);

   /*» HANDLER'S  */
   const handleOpen = () => { setOpen(true) }
   const handleClose = () => { setOpen(false) }

   return (
      <Modal
         open={open}
         onClose={handleClose}
      >
         <Body>
            {children}
         </Body>
      </Modal>
   )
}