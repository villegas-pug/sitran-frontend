import React from 'react'
import styled from 'styled-components'
import { fontFamily } from 'config/font'
import index from 'components/App'

const DrawerTitle = styled.title`
   display: block;
   font-family: ${fontFamily.DrawerTitle};
   font-weight: 100;
   font-size: 1.2rem;
   color: #999;
   text-align: right;   
`

export default function (props) {
   const { title, ...rest } = props
   return (
      <DrawerTitle
         {...rest}
      >
         {title}
      </DrawerTitle>
   )
}