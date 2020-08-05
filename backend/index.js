const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 80


app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(cors())

app.use('/api', require('./routes/index'))


app.listen(port)
