const app = require('../app');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


app.use(session({
    secret: 'checkmyapp',
    resave : false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 1000*60*60*24*14
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl : 60*60*24*14
    })

}));