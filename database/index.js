const mongoose = require('mongoose');
const env = require(`../env/dev`);



exports.clientPromise = mongoose.connect(env.dbUrl).then( () => {
    console.log('connexion db ok');
}).catch( (err) => {
    console.log(err);
});

