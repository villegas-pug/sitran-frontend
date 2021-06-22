import React, { useEffect, useMemo } from 'react'

import SteperMui from 'components/StepperMui'

import useStages from 'hooks/useStages'
import useEmpresa from 'hooks/useEmpresa'
import useDistrito from 'hooks/useDistrito'
import usePais from 'hooks/usePais'

export default function NuevoOperativoSubMod() {

   /*» CUSTOM-HOOK'S  */
   const { stages, currentStage, componentByCurrentStage } = useStages('NuevoOperativoSubMod')
   const { handleListEmpresa } = useEmpresa()
   const { handleListDistrito } = useDistrito()
   const { handleListPais } = usePais()

   /*» EFFECT'S:  */
   useEffect(() => { handleListEmpresa() }, [])
   useEffect(() => { handleListDistrito() }, [])
   useEffect(() => { handleListPais() }, [])

   /*» DEP'S  */
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
