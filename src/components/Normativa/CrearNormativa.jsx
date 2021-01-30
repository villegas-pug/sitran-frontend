import React, { useState } from 'react'
import {
   FormControl,
   InputLabel,
   OutlinedInput,
   FormHelperText,
   Button,
   Box
} from '@material-ui/core'
import Flash from 'react-reveal/Flash'
import { CreateNewFolder, Save } from '@material-ui/icons'
import Accordion from 'components/Accordion'
import useModal from 'hooks/useModal'
import SpeedDials from 'components/SpeedDial'
import { useSelector } from 'react-redux'

export default function CrearGrupo() {
   /*» HOOK'S STORE  */
   const { lineamiento: { groups } } = useSelector(store => store)

   /*» HOOK'S  */
   const [setContentModal] = useModal({ title: '» NUEVO GRUPO NORMATIVO', width: 500 })
   const [newGroup, setNewGroup] = useState('')

   /*» HANDLER'S  */
   const handleOnChangeNewGroupModal = e => { setNewGroup(e.target.value) }

   const handleOnCreateNewGroupModal = e => {
      console.log(`Se creará el grupo: ${newGroup}`)
   }

   /*» ARGUMENT'S : `optSpeedDialAction`  */
   const optSpeedDialAction = [
      {
         icon: <Save />,
         tooltip: 'Crear',
         handleOnClick: () => { handleOnCreateNewGroupModal() }
      },
   ]

   const handleOnClickCrearNormativa = e => {
      setContentModal(
         <>
            <FormControl variant='outlined' fullWidth>
               <InputLabel htmlFor='newGroup'>Nombre</InputLabel>
               <OutlinedInput
                  id='newGroup'
                  labelWidth={80}
                  onChange={handleOnChangeNewGroupModal}
               />
               <FormHelperText>¡Ingresar nuevo grupo Aquí!</FormHelperText>
            </FormControl>
            <Box display='flex' mt={2}>
               <SpeedDials direction='right' optSpeedDialAction={optSpeedDialAction} />
            </Box>
         </>
      )
   }

   return (
      <>
         <Flash>
            <>
               {/*» HEADER... */}
               <Box display='flex' p={1}>
                  <Box flexGrow={1}></Box>
                  <Box flexGrow={0}>
                     <Button
                        variant='contained'
                        size='large'
                        onClick={handleOnClickCrearNormativa}
                     >
                        <CreateNewFolder />
                        CREAR GRUPO NORMATIVO
                     </Button>
                  </Box>
               </Box>

               {/*» BODY... */}
               <Box display='flex' mt={1} justifyContent='center'>
                  <Box width='100%'>
                     {
                        <Accordion groups={groups} />
                     }
                  </Box>
               </Box>
            </>
         </Flash>
      </>
   )
}