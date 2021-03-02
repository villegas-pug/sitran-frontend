import React from 'react'
import styled from 'styled-components'

const FormGroup = styled.div`
   display: inline-block;
   padding: .5rem;
   height: 4rem;
`
export default ({ children }) => {
   return (
      <FormGroup>
         {children}
      </FormGroup>
   )
}