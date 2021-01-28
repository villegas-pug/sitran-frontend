import React, { useEffect } from 'react'
import {
   Card,
   CardHeader,
   Avatar,
   CardContent,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   Grid
} from '@material-ui/core'
import { PersonOutline, ChevronRight } from '@material-ui/icons'
import moment from 'moment'

export default function InterpolDetalle({ data }) {
   const {
      nombres,
      apellidos,
      sexo,
      cedula,
      pasaporte,
      nacionalidad,
      fechaEmision,
      fechaLugarNacimiento,
      motivo,
      procedencia,
      sede,
   } = data

   return (
      <>
         <Card>
            <CardHeader
               avatar={<Avatar><PersonOutline /></Avatar>}
               title={`${nombres}, ${apellidos}`}
               subheader={nacionalidad}
            />
            <CardContent>
               <Grid container>
                  <Grid item xs={6}>
                     <List>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Pasaporte' secondary={pasaporte} />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Cédula' secondary={cedula} />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Nacionalidad' secondary={nacionalidad} />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Sexo' secondary={sexo} />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Fecha Emisión' secondary={fechaEmision} />
                        </ListItem>
                     </List>
                  </Grid>
                  <Grid item xs={6}>
                     <List>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Fecha y Lugar de Nacimiento' secondary={fechaLugarNacimiento} />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Motivo' secondary={motivo} />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Procedencia' secondary={procedencia} />
                        </ListItem>
                        <ListItem>
                           <ListItemIcon><ChevronRight /></ListItemIcon>
                           <ListItemText primary='Sede' secondary={sede} />
                        </ListItem>
                     </List>
                  </Grid>
               </Grid>
            </CardContent>
         </Card>
      </>
   )
}
