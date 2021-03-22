const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/router')


//Db connection
const URI = process.env.dbURI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true },  () => {console.log('Connected to Db')})

//Middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({origin: '*'}))
app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
