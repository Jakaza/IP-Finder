const express = require('express');
const ejs = require('ejs')
const path = require("path")
const router = require('./routes/home')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.use(router);


app.listen(3000, () => {
  console.log('server started');
});
