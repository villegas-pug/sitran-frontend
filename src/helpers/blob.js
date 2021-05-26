export default function generateBlob(payload){
   return new Blob([JSON.stringify(payload)], {
      type: 'Application/json'
   })
} 