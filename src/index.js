const express = require( 'express')

const app =  express()

app.use('/',(req , res)=>{
  res.send('Hola Mundo')
})
app.listen(3005 , ()=>{
  console.log('Api escuchando en el puerto 3005')
})