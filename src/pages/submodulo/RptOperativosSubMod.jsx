import React from 'react'
import Iframe from 'react-iframe'

export default function RptOperativosSubMod() {
   return (
      <Iframe
         url='https://app.powerbi.com/reportEmbed?reportId=55c178de-7f0e-453f-ad32-3263e1e7c61f&autoAuth=true&ctid=01ce8357-a75e-455e-8c4c-faaaa6dbd8fe&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
         position='absolute'
         width='92%'
         height='85%'
         frameBorder={0}
         loading='eager'
         scrolling='no'
      />
   )
}
