import React from 'react'
import styled from 'styled-components'


const MyCapitalizeLetter = styled.title`
   font-size: ${({ size }) => size ? `${size}rem` : '1rem'};
   text-transform: capitalize;
`

export default function CapitalizeLetter({ title, ...rest }) {
   return (
      <MyCapitalizeLetter {...rest}>{title}</MyCapitalizeLetter>
   )
}
