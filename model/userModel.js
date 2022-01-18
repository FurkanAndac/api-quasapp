// userModel.js
var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: {
        type: String,
        required: true
    },    
    bio: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },  
    curriculum_vitae: {
        name: String
    }
});
// Export User model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}