const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', router);

const port = 5000

app.listen(port, ()=>{
    console.log("Server started on port 5000.")
});