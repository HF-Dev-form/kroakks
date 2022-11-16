const mongoose = require('mongoose');
const env = require(`../env/prod`);



exports.clientPromise = mongoose.connect(env.dbUrl).then( () => {
    console.log('connexion db ok');
}).catch( (err) => {
    console.log(err);
});

