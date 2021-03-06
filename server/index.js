const express = require('express');
const morgan = require('morgan');
const app = express();

const  { Mongoose } = require ('./database');


//Settings
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());



//Routes

//Starting the server 


app.listen(app.get ('port'), () => {
    console.log('Server on port', app.get('port'));
});