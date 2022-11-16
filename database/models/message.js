const mongoose = require('mongoose');
const schema = mongoose.Schema;


const messageSchema = schema({
    content : { 
        type: String, maxlength: [140, "Votre message ne dois pas dépasser 140 caractères"], 
        minlength: [2, "Vous devez saisir au moins 2 caractères"], 
        required: [true, 'Ce champs est requis']
        },
    author: {type: schema.Types.ObjectId, ref: 'user', required: true}

});


const Message = mongoose.model('message', messageSchema);

module.exports = Message;