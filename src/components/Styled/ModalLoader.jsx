import React from 'react'
import {makeStyles} from '@material-ui/styles'
import { PropagateLoader } from 'react-spinners'
import Fade from 'react-reveal/Fade'

const useStyle = makeStyles({
   box: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, .2)',
      zIndex: 20
   }
}) 


export default function ModalLoader(){
   
   /*» HOOK'S  */
   const clasess = useStyle()

   return (
      <>
         <Fade>
            <body className={clasess.box}>
               <PropagateLoader color='#004795' size={25} />
            </body>
         </Fade>
      </>
   )
}