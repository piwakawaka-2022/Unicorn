const path = require('path')
const express = require('express')
const cors = require('cors')

const wishRoutes = require('./routes/wishes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('./api/v1/wishes', wishRoutes)
server.use(cors('*'))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// server.get('/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   let index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

module.exports = server
