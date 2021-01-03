// userController.js
// Import user model
User = require('../model/userModel');

// Handle index actions
exports.uploadUser = function (req, res) {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {            
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            var user = new User();
            user.name = req.body.name ? req.body.name : contact.name;
            user.gender = req.body.gender;
            user.email = req.body.email;
            user.phone = req.body.phone;
            user.curriculum_vitae = req.files.curriculum_vitae
            console.log(req);


            user.save(function (err) {
                if (err) {
                    res.json(err);
                } else {

                    //send response
                    res.send({
                        status: true,
                        message: 'Profile is created',
                        data: {
                            name: user.name,
                            phone: user.phone,
                            email: user.email ,
                            cv: user.curriculum_vitae
                        }
                    });
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}

exports.getUsers = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
}

// Handle view user info
exports.getUser = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        console.log(user.curriculum_vitae)
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};