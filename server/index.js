const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 8000;
const morgan = require('morgan');
app.use(morgan('dev'));

//static middleware 
app.use(express.static(path.join(__dirname, '../public')))


//serving up index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });

//500 error
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });


//starting server
app.listen(port, function () {
    console.log(`Your server, listening on port ${port}`);
  });