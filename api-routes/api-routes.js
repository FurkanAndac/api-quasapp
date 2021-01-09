// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to api-quasapp crafted with love!',
    });
});
// Import contact controller
var contactController = require('../controller/contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Import user controller
var userController = require('../controller/userController')
// User routes
router.route('/users')
    .post(userController.uploadUser)
    .get(userController.getUsers)
router.route('/users/:user_id')
    .get(userController.getUser)
router.route('/users/:user_id/name')
    .get(userController.getUserName)
    .post(userController.updateUserName)
router.route('/users/:user_id/surname')
    .get(userController.getSurname)
    .put(userController.updateSurname)
router.route('/users/:user_id/gender')
    .get(userController.getGender)
    .put(userController.updateGender)
router.route('/users/:user_id/email')
    .get(userController.getEmail)
    .put(userController.updateEmail)
router.route('/users/:user_id/phone')
    .get(userController.getPhone)
    .put(userController.updatePhone)
router.route('/users/:user_id/cv')
    .get(userController.getCV)
    .put(userController.updateCV)

//Import vacancy controller
var vacancyController = require('../controller/vacancyController')
// Vacancy routes
router.route('/vacancies')
    .get(vacancyController.getVacancies)

// Export API routes
module.exports = router;