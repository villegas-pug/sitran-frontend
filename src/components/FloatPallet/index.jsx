import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
   /* outline: 1px solid #999; */
   position: fixed;
   right: 0;
   top: 4.5rem;
   height: ${({ height }) => height && `${height}rem`};
   padding: .3rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 100;
   background-color: #fff;
   border-radius: .5rem;
`

export default function FloatPallet({ children, ...rest }) {
   return (
      <>
         <Body
            {...rest}
         >
            {children}
         </Body>
      </>
   )
}
