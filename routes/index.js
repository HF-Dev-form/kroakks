const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards')
const messages = require('./messages');
const users = require('./users');
const auth = require('./auth');

router.use('/messages', ensureAuthenticated, messages);
router.use('/users', users);
router.use('/auth', auth);

router.get('/', (req, res, next) => {
    res.redirect('/messages');
})

module.exports = router;