// vacancyModel.js
var mongoose = require('mongoose');
// Setup schema
var vacancySchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    create_date: {
        type: Date,
        default: Date.now
    },  

});
// Export Vacancy model
var Vacancy = module.exports = mongoose.model('vacancy', vacancySchema);
module.exports.get = function (callback, limit) {
    Vacancy.find(callback).limit(limit);
}