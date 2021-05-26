import React, { useEffect } from 'react'
import DayCard from 'components/DayCard'
import Menu from 'components/Menu'
import useProductionToDay from 'hooks/useProductionToDay'

export default function ActividadesMod(){

   /*» CUSTOM HOOK'S... */
   const { 
      productionAdvanceByDay,
      handleCountActividadCurrentWeek
   } = useProductionToDay()

   /*» EFFECT'S  */
   useEffect(() => {
      handleCountActividadCurrentWeek()
   }, [])

   return (
      <>
         <Menu>
            {
               productionAdvanceByDay.map(({dayOfWeek, date, enableToday, progress}) => (
                  <DayCard
                     key={dayOfWeek}
                     dayOfWeek={dayOfWeek}
                     date={date}
                     enableToday={enableToday}
                     progress={progress}
                  />
               ))
            }
         </Menu>
      </>
   )
}