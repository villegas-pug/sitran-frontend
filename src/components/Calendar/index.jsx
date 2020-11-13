import React, { useState } from 'react'
import { Calendar, Badge, ConfigProvider } from 'antd'
import esPE from 'antd/lib/locale/es_ES'
import styled from 'styled-components'


const Container = styled.div`
   display: flex;
   flex-flow:column;
`

function getListData(value) {
   let listData;
   switch (value.date()) {
      case 8:
         listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
         ]
         break
      case 13:
         listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
         ];
         break
      case 15:
         listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
         ];

         break
      case 16:
         listData = [
            { type: 'warning', content: 'This is warning event' },
         ];
         break
      default:
   }
   return listData || [];
}

function dateCellRender(value) {
   const listData = getListData(value);
   return (
      <>
         {
            listData.map(item => (
               <Badge status={item.type} text={item.content} />
            ))
         }
      </>
   )
}

function monthCellRender(value) {
   return (
      <div className="notes-month">
         <section>Test</section>
      </div>
   )
}

export default function Calendario() {
   const [daySelected, setDaySelected] = useState()
   return (
      <Container>
         <div style={{ height: '5rem', backgroundColor: '#1f1f1f10' }}>
            <h1>{daySelected}</h1>
         </div>
         <ConfigProvider locale={esPE}>
            <Calendar
               dateCellRender={dateCellRender}
               monthCellRender={monthCellRender}
               onSelect={(meta) => { setDaySelected(meta.calendar('dd/MM/yyyy')) }}
            />
         </ConfigProvider>
      </Container>
   )
}