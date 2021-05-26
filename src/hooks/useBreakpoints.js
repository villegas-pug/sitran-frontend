import { useState, useEffect } from 'react'
import { breakpoints as breakpointsDb } from 'constants/breakpoints'

export default function useBreakpoints() {

   const [breakpoints, setBreakpoints] = useState({})
   const [currentScreen, setCurrentScreen] = useState('')

   /*» EFFECT'S  */
   useEffect(() => {
      findScreenByBreakPoint({
         target: { outerWidth: window.screen.width}
      })
   }, [])

   useEffect(() => {
      window.addEventListener('resize', findScreenByBreakPoint)
   }, [])

   useEffect(() => {
      setBreakpoints(
         breakpointsDb.reduce((map, { name }) => (map[name] = name, map), {})
      )
   }, [])

   /*» PRIVATE - HANDLER'S   */
   const findScreenByBreakPoint = ({ target: { outerWidth } }) => {
      setCurrentScreen(
         breakpointsDb.find(({ measure }) => outerWidth >= measure)?.name
      )
   }

   /*» HOF - HANDLER'S   */
   const unsuscribeScreenResizeListener = () => {
      window.removeEventListener('resize', findScreenByBreakPoint)
   }

   return {
      currentScreen,
      breakpoints,

      unsuscribeScreenResizeListener
   }
}