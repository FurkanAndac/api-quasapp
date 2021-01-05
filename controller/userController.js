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
            user.name = req.body.name ? req.body.name : user.name;
            user.surname = req.body.surname ? req.body.surname : user.surname;
            user.gender = req.body.gender;
            user.email = req.body.email;
            user.phone = req.body.phone;
            user.curriculum_vitae = req.files.curriculum_vitae

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
                            surname: user.surname,
                            gender: user.gender,
                            email: user.email,
                            phone: user.phone,
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
            return;
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

exports.getUserName = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user.name
        });
    });
};

exports.getSurname = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user.surname
        });
    });
};

exports.getGender = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user.gender
        });
    });
};

exports.getEmail = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user.email
        });
    });
};

exports.getPhone = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user.phone
        });
    });
};

exports.getCV = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user.curriculum_vitae
        });
    });
};

exports.updateUserName = function(req, res) {
    User.findById(req.params.user_id, function (err, user) {

        user.name = req.body.name ? req.body.name : user.name;
        user.save(function (err) {
            if (err) {
                res.json(err);
            } else {

                //send response
                res.send({
                    status: true,
                    message: 'Username is updated',
                    data: user.name
                });
            }
        })
    });
  };

  exports.updateSurname = function(req, res) {
    User.findById(req.params.user_id, function (err, user) {

        user.surname = req.body.surname ? req.body.surname : user.surname;
        user.save(function (err) {
            if (err) {
                res.json(err);
            } else {

                //send response
                res.send({
                    status: true,
                    message: 'Surname is updated',
                    data: user.surname
                });
            }
        })
    });
  };

  exports.updateGender = function(req, res) {
    User.findById(req.params.user_id, function (err, user) {

        user.gender = req.body.gender;
        user.save(function (err) {
            if (err) {
                res.json(err);
            } else {

                //send response
                res.send({
                    status: true,
                    message: 'Gender is updated',
                    data: user.gender
                });
            }
        })
    });
  };

  exports.updateEmail = function(req, res) {
    User.findById(req.params.user_id, function (err, user) {

        user.email = req.body.email;
        user.save(function (err) {
            if (err) {
                res.json(err);
            } else {

                //send response
                res.send({
                    status: true,
                    message: 'Email is updated',
                    data: user.email
                });
            }
        })
    });
  };

  exports.updatePhone = function(req, res) {
    User.findById(req.params.user_id, function (err, user) {

        user.phone = req.body.phone;
        user.save(function (err) {
            if (err) {
                res.json(err);
            } else {

                //send response
                res.send({
                    status: true,
                    message: 'Phonenumber is updated',
                    data: user.phone
                });
            }
        })
    });
  };
  
  exports.updateCV = function(req, res) {
    User.findById(req.params.user_id, function (err, user) {

        user.curriculum_vitae = req.body.curriculum_vitae;
        user.save(function (err) {
            if (err) {
                res.json(err);
            } else {

                //send response
                res.send({
                    status: true,
                    message: 'CV is updated',
                    data: user.curriculum_vitae
                });
            }
        })
    });
  };