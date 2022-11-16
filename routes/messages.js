const router = require('express').Router();
const { messageList, messageNew, messageCreate, messageDelete, messageEdit, messageUpdate } = require('../controllers/messages.controller');


router.get('/', messageList);
router.get('/new', messageNew);
router.post('/', messageCreate);
router.get('/edit/:messageId', messageEdit)
router.post('/update/:messageId', messageUpdate)
router.delete('/:messageId', messageDelete);

module.exports = router;