import React from 'react'
import PropTypes from 'prop-types'
import {
   ComposedChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   Line
} from 'recharts'
import {
   Button,
   Typography
} from '@material-ui/core'
import styled from 'styled-components'
import { Equalizer } from '@material-ui/icons'

const Container = styled.div`
   grid-column: 3 / -1;
   grid-row: 1 / -1;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export default function ChartByNacionalidad({title, data}) {

   return (
      <Container>
         <Button
            fullWidth
            variant='text'
            color='inherit'
            startIcon={<Equalizer fontSize='large' />}
         >
            <Typography variant='h4' color='textSecondary'>{title}</Typography>
         </Button>
         <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart
               layout='vertical'
               data={data}
            >
               <CartesianGrid strokeDasharray='2 2'  />
               <Tooltip
                  labelStyle={{fontSize: 9, fontWeight: 1000}} 
                  contentStyle={{fontSize: 8}}
                  formatter={(value) => value.toLocaleString('es-PE') } 
               />
               <XAxis 
                  type='number' 
                  tickLine={false} 
                  axisLine={false}
                  fontSize={7}
                  tickFormatter={(value) => value.toLocaleString('es-PE')}
               />
               <YAxis 
                  dataKey='pais' 
                  type='category'
                  fontSize={7}
                  tickLine={false} 
                  axisLine={false} 
                  width={150}
               />
               <Bar 
                  name='Intervenidos' 
                  dataKey='totalIntervenidos' 
                  barSize={8} 
                  fill='none'
                  stroke='#004795'
                  tooltipType='none'
               />
               <Line
                  name='Intervenidos'
                  dataKey='totalIntervenidos' 
                  activeDot
                  label={{
                     position: 'insideBottomRight',
                     fill: '#222',
                     fontSize: 11,
                     fontWeight: 1000,
                     formatter: (value) => value.toLocaleString('es-PE')
                  }} 
                  strokeWidth={1}
                  stroke='#004795'
                  type='basisOpen'
               />
            </ComposedChart>
         </ResponsiveContainer>
      </Container>
   )
}

ChartByNacionalidad.propTypes = {
   title: PropTypes.string.isRequired,
   data: PropTypes.array.isRequired
}