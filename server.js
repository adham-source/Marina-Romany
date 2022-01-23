const express = require('express')
const app = express()
require('./startup/db')()

app.set('view engine' , 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// app.set('views' , 'views')



require('./routes')(app)

app.listen(4000)