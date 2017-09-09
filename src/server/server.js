const express = require('express')
const app = express()
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const http = require('http').Server(app)
const path = require('path')
const indexRouter = require('./routes/index')
const PORT = 8080
const STATIC_PATH = path.join(__dirname,
  process.env.NODE_ENV === 'production'
  ? 'public'
  :'../client'
)

app.use(logger('dev'))                 // setups up logging
app.use(bodyParser.json())             // body parser - allows you to access req.body
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())               // parses cookies
app.use(express.static(STATIC_PATH))  // use static path

// routes
app.use('*', indexRouter)

// start server
const server = http.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}`)
})

module.exports = STATIC_PATH

