import React, { useMemo } from 'react'

import SteperMui from 'components/StepperMui'

import useStages from 'hooks/useStages'

export default function NuevoOperativoSubMod() {
   const { stages, currentStage, componentByCurrentStage } = useStages('NuevoOperativoSubMod')

   /*» HOOK'S  */
   const steps = useMemo(() => stages ?? [], [stages])

   return (
      <>
         <>
            <SteperMui activeStep={currentStage} steps={steps} />
         </>
         {
            componentByCurrentStage
         }
      </>
   )
}
