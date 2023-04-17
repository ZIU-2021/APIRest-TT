const express = require('express');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));

//Port configuration
app.listen(3000);
console.log('App listening on port 3000')
