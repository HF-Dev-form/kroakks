const User = require('../database/models/user');

exports.createUser = async (user) => {
    try {
         const hashedPassword = await User.hashedPassword(user.password)
         const newUser = new User({
         username: user.username,
         local: {
            email: user.email,
            password: hashedPassword
        }
    })
    return newUser.save();
    } catch (e) {
        throw e;
    }
   
}

exports.findUserPerId = (id) => {
  return User.findById(id).exec();
}

exports.findUserPerEmail = (email) => {
    return User.findOne({'local.email': email}).exec();
}

exports.comparePassword = (id) => {
    return User.findById(id).exec();
}