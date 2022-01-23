const express = require('express')
const app = express()
require('./startup/db')

app.set('view engine' , 'ejs')
app.use(express.urlencoded({ extended: true}))

// app.set('views' , 'views')

require('./startup/db')()

require('./routes')(app)

app.listen(4000)