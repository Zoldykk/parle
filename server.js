const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes/router')

//Db connection
const URI = process.env.dbURI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true },  () => {console.log('Connected to Db')})

//Middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use( (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cookieParser())
app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
