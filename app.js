const express = require('express')
const app = express()

const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const uuid = require('uuid')
const session = require('express-session')
const validation = require('express-validator')

require('dotenv').config()

// logger only in development
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(validation())

// declare path static that used
app.use(express.static('static'))
app.use(express.json())

// hide x-power-by section in response-header
app.disable('x-powered-by')

// middleware to resolve CORS, set header for api
app.use(function (req, res, next) {
  var oneof = false
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    oneof = true
  }
  if (req.headers['access-control-request-method']) {
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method'])
    oneof = true
  }
  if (req.headers['access-control-request-headers']) {
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers'])
    oneof = true
  }
  if (oneof) {
    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365)
  }

  // intercept OPTIONS method
  if (oneof && req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

// config middleware assign session id
app.use(session({
  genid: (req) => {
    return uuid() // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// connect db
var pathDatabase = 'mongodb://127.0.0.1/authentication'
const uri = 'mongodb+srv://CuongCoder:Manhcuong1998@cluster0-ieqyd.mongodb.net/test?retryWrites=true'
mongoose.connect(pathDatabase, {
  useNewUrlParser: true,
  useCreateIndex: true
})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('connect successfully!')
})

// declare router
const bookRoute = require('./server/routes/book.route.js')
const userRoute = require('./server/routes/user.route.js')
app.use('/book', bookRoute)
app.use('', userRoute)

app.get('/', (req, res, next) => {
  let randomStr = uuid()
  res.send(`randomString: ${randomStr}, sessionId:  ${req.sessionID}`)
})

module.exports = app
