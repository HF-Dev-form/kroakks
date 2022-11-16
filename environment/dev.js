const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://bsr19:Nomanland2!@cluster0.4eemoi7.mongodb.net/Croakker?retryWrites=true&w=majority',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key')
}