const { createUser } = require("../queries/users.queries");
const multer = require('multer');
const path = require('path');
const upload = multer({ storage: multer.diskStorage({
       destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../public/images/avatar'))
       },
       filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`)
       } 
    })
});


exports.signupForm = (req, res, next) => {
        res.render('users/user_form', { errors: null, isAuthenticated: req.isAuthenticated(), currentUser: req.user  });
};

exports.signup = async (req, res, next) => {
    const body = req.body;
    try { 
        const user = await createUser(body);
        res.redirect('/');
    } catch (e) {
        res.render('users/user_form', { errors: [e.message], isAuthenticated: req.isAuthenticated(), currentUser: req.user  });
    }
};

exports.uploadImage = [
    upload.single('avatar-profile'),
    async (req, res, next) => {
        const user = req.user;
        try {
            user.avatar = `/images/avatar/${req.file.filename}`;
            await user.save();
            res.redirect('/')
        } catch (e) {
            next(e);
        }
    }
] 