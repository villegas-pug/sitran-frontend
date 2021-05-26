import React, { Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
   Menu,
   MenuItem,
   IconButton,
   Button,
   Divider,
   Tooltip,
   ListItem,
   ListItemIcon,
   ListItemText,
   Drawer,
   AppBar,
   Toolbar,
   List,
   CssBaseline, Typography
} from '@material-ui/core'
import {
   AccountCircle,
   ExitToApp,
   Menu as MenuIcon,
   ChevronLeft,
   ChevronRight
} from '@material-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars'

import { useHistory } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import AppTitle from 'components/Styled/AppTitle'
import DrawerTitle from 'components/Styled/DrawerTitle'
import ModalLoader from 'components/Styled/ModalLoader'

import { Icons } from 'helpers/icons'
import useAuth from 'hooks/useAuth'

const drawerWidth = 150

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: theme.palette.primary.main,
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: 36,
   },
   hide: {
      display: 'none',
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
   },
   drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   drawerClose: {
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
         width: theme.spacing(9) + 1,
      },
   },
   toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
   },
   content: {
      position: 'relative',
      width: '100%',
      height: 'calc(100vh - .1rem)',
      padding: 10
   },
}))
export default function MyDrawer({ children, ...rest }) {

   /*-> HOOK'S STORE...  */
   const { modAuthenticated } = useAuth()

   /*-> HOOK'S...  */
   const [selectedItemDrawer, setSelectedItemDrawer] = useState(-1)
   const history = useHistory()

   /* const { userLogged, logout } = useAuth() */

   const classes = useStyles(rest)
   const theme = useTheme()

   const [anchorEl, setAnchorEl] = useState(null)
   const [open, setOpen] = React.useState(false)

   /*-> HANDLER'S...  */
   const handleDrawerOpen = () => setOpen(true)
   const handleDrawerClose = () => setOpen(false)
   const handleOnClickOptSidebar = (path, iItemDrawer) => (history.push(path), setSelectedItemDrawer(iItemDrawer))

   const handleOpenMenu = (e) => { setAnchorEl(e.currentTarget) }
   const handleCloseMenu = () => { setAnchorEl(null) }
   const handleCerrarSesion = () => {}

   return (
      <div className={classes.root}>{/*» FLEX-CONTAINER */}
         <CssBaseline />

         {/*» FLEX-ITEM: 01, Barra superior  */}
         <AppBar
            position='fixed'
            className={clsx(classes.appBar, { [classes.appBarShift]: open })}
         >
            <Toolbar>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={handleDrawerOpen}
                  edge='start'
                  className={clsx(classes.menuButton, { [classes.hide]: open })}
               >
                  <MenuIcon />
               </IconButton>
               <AppTitle name='SISTEMA INTEGRADO DE LA DIRECCIÓN DE GESTIÓN TÉCNICA Y FISCALIZACIÓN MIGRATORIA' size='1.3' color='#fff'/>

               <div style={{ marginLeft: 'auto' }}>
                  <Button
                     id='user-account'
                     style={{ color: '#fff' }}
                     aria-controls='menu-account'
                     aria-haspopup={true}
                     onClick={handleOpenMenu}
                  >
                     <AccountCircle />
                     {/* {userLogged} */}
                  </Button>

                  <Menu
                     keepMounted
                     id='menu-account'
                     anchorEl={anchorEl}
                     open={!!anchorEl}
                     onClose={handleCloseMenu}
                  >
                     <MenuItem onClick={handleCerrarSesion}>
                        <ExitToApp />Cerrar sesión
                     </MenuItem>
                  </Menu>
               </div>
            </Toolbar>
         </AppBar>

         {/*» FLEX-ITEM: 02 */}
         <Drawer
            variant='permanent'
            className={clsx(classes.drawer, {
               [classes.drawerOpen]: open,
               [classes.drawerClose]: !open,
            })}
            classes={{
               paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
               }),
            }}
         >
            <div className={classes.toolbar}>
               <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
               </IconButton>
            </div>
            <List>
               {
                  modAuthenticated?.map(({ idProcedimiento, nombre, informacion, icono, rutaPrincipal }) => (
                     <>
                        <Divider />
                        <ListItem
                           button
                           selected={selectedItemDrawer === idProcedimiento}
                           key={idProcedimiento}
                           onClick={() => { handleOnClickOptSidebar(rutaPrincipal, idProcedimiento) }}
                        >
                           <Tooltip arrow placement='right-end' title={<Typography variant='h6' color='initial'>{informacion}</Typography>}>
                              <ListItemIcon>{(() => Icons[icono])()}</ListItemIcon>
                           </Tooltip>
                           <ListItemText><DrawerTitle title={nombre} size={.8} /></ListItemText>
                        </ListItem>
                     </>
                  ))
               }
            </List>
         </Drawer>

         {/*» FLEX-ITEM: 03 ► Container dinámico...   */}
         <main className={classes.content}>
            <Scrollbars autoHide>
               <div className={classes.toolbar} />
               <Suspense fallback={<ModalLoader />}>
                  {children}
               </Suspense>
            </Scrollbars>
         </main>
      </div>
   )
}

MyDrawer.propTypes = {
   children: PropTypes.any.isRequired
}