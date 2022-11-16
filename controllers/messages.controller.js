const Message = require('../database/models/message');
const { getMessages, createMessage, deleteMessage, getMessage, updateMessage } = require('../queries/messages.queries');

exports.messageList = async (req, res, next) => {
    try {
        const messages = await getMessages();
        res.render('messages/message', { messages, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
    } catch (e) {
        next(e);
    }
}

exports.messageNew = (req, res, next) => {
    res.render('messages/message_form', {message: {}, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
}

exports.messageCreate = async (req, res, next) => {
    const body = req.body;
    try {
       await createMessage({...body, author: req.user._id});
       res.redirect('/messages');
    } catch (e) {
        const errors = Object.keys(e.errors).map(key => e.errors[key].message);
        res.status(400).render('messages/message_form', { errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user  }); 
    } 
}

exports.messageEdit = async (req, res, next) => {
   try{
     const messageId = req.params.messageId;
     const message = await getMessage(messageId);
     res.render('messages/message_form', {message, isAuthenticated: req.isAuthenticated(), currentUser: req.user })   
   } catch (e) {
     next(e)
   }
   
}

exports.messageUpdate = async (req, res, next) => {
    const messageId = req.params.messageId;
    try {
        const body = req.body;
        await updateMessage(messageId, body);
        res.redirect('/messages')
    } catch (e) {
        const errors = Object.keys(e.errors).map(key => e.errors[key].message);
        const message = await getMessage(messageId);
        res.status(400).render('messages/message_form', { errors, message, isAuthenticated: req.isAuthenticated(), currentUser: req.user  }); 
    }
}

exports.messageDelete = async (req, res, next) => {
    try {
        const messageId = req.params.messageId;
        await deleteMessage(messageId);
        const messages = await getMessages();
        res.render('messages/messages_list', { messages });
    } catch (e) {
        next(e);
    }
}