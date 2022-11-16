const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routing = require('./routes');
const errorHandler = require('errorhandler');
require('./database/index');

const app = express();
module.exports = app;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




require('./config/session');
require('./config/passport');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routing);

console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV === 'dev'){
    app.use(errorHandler());
}else {
    app.use((err, req, res, next) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message
        });
    })
}

