const mongoose = require('mongoose');
const env = require(`../environment/prod`);




exports.clientPromise = mongoose
        .connect(env.dbUrl)
        .then( () => {
            console.log('connexion db ok');
        }).catch( (err) => {
            console.log(err);
        });

