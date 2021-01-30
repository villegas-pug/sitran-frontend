import React from 'react'
import styled from 'styled-components'

const MyMenu = styled.div`
   display: flex;
   height: calc(100vh - 120px);
   justify-content: space-around;
   align-items: center;
   flex-wrap: wrap;
`

export default function Menu({ children }) {
   return (
      <MyMenu>{children}</MyMenu>
   )
}