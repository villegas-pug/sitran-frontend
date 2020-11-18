## Llamda al HOOK...

```javascript
   /*» Inicialización... */
   const [contentInfoModal] = InfoModal({ title: '» PROGRESO DEL TRAMITE', width: 1000 })

   /*
      » Llamado a la dependencia del HOOK:
         ►Importante: Cuando se pasa un argumento valido, activa el modal...
   */
   contentInfoModal(Aquí un Component: `En su estado elemento...`)
```

# HOOK  ◄► SPEED-DIAL
---

```javascript

   /*»  CALL : COMPONENT ...*/
   <SpeedDial direction='right' optSpeedDialAction={optSpeedDialAction} />

   /*» Argumentos del componente... */
   /*-----------------------------------------------------------------------------------------------------*/

   /*» ARGUMENT : `optSpeedDialAction`  */
     const optSpeedDialAction = [
      {
         icon: <Save />,
         tooltip: 'Registrar',
         handleOnClick: () => { rRegistrar.current.click() }
      }, {
         tooltip: 'Limpiar',
         icon: <DeleteForever />,
         handleOnClick: () => { rLimpiar.current.click() }
      },
   ]

```