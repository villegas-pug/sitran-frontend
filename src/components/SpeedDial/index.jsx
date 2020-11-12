import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
   speedDial: {
      position: 'fixed',
      left: '5rem',
      bottom: '.5rem',
   },
}))

const actions = [
   { icon: <FileCopyIcon />, name: 'Copy' },
   { icon: <SaveIcon />, name: 'Save' },
   { icon: <PrintIcon />, name: 'Print' },
   { icon: <ShareIcon />, name: 'Share' },
   { icon: <FavoriteIcon />, name: 'Like' },
]

export default function SpeedDials(props) {
   const { direction, optSpeedDialAction } = props
   const classes = useStyles()
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
               />
            ))
         }
      </SpeedDial>
   )
}