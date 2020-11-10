import React from 'react'
import styled from 'styled-components'
import { fontFamily } from 'config/font'

const AppTitle = styled.title`
   display: block;
   font-family: ${fontFamily.AppTitle};
   font-size: ${({ size }) => (size ? size : '1.8rem')} ;
   color: ${({ color }) => (color ? color : '#000')};
   text-align: center;
`

export default function (props) {
   const { name, ...rest } = props
   return (
      <AppTitle {...rest}>{name}</AppTitle>
   )
}