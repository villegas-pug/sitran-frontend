import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

const useStyles = makeStyles((theme) => ({
   speedDial: ({ position }) => ({
      position: position ?? 'relative',
      left: 0,
      bottom: 0,
   }),
}))

const css = {
   button: {
      backgroundColor: 'red'
   }
}

export default function SpeedDials({ position, ...rest }) {
   const { direction, optSpeedDialAction } = rest
   const classes = useStyles({ position })
   const [open, setOpen] = React.useState(false)

   const handleClose = () => {
      setOpen(false)
   }

   const handleOpen = () => {
      setOpen(true)
   }

   return (
      <SpeedDial
         ariaLabel="SpeedDial example"
         className={classes.speedDial}
         FabProps={{ style: { backgroundColor: '#004795', color: '#fff', fontSize: 17 } }}
         icon={<SpeedDialIcon />}
         onClose={handleClose}
         onOpen={handleOpen}
         open={open}
         direction={direction}
      >
         {
            optSpeedDialAction.map((action) => (
               <SpeedDialAction
                  key={action.tooltip}
                  tooltipTitle={action.tooltip}
                  icon={action.icon}
                  onClick={() => {
                     action.handleOnClick()
                     handleClose()
                  }}
                  color='primary'
               />
            ))
         }
      </SpeedDial>
   )
}