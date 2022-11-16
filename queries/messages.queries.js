const Message = require('../database/models/message');

exports.getMessages = () => {
    return Message.find({}).exec();
}

exports.getMessage = (messageId) => {
    return Message.findById(messageId).exec();
}

exports.createMessage = (message) => {
    const newMessage = new Message(message);
    return newMessage.save();
}

exports.updateMessage = (messageId, message) => {
    return Message.findByIdAndUpdate(messageId, { $set: message }, { runValidators: true } ).exec();
}

exports.deleteMessage = (messageId) => {
    return Message.findByIdAndDelete(messageId).exec();
}


