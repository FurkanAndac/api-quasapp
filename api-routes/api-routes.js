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
    .get(userController.getUsers);
router.route('/users/:user_id')
    .get(userController.getUser);

// Export API routes
module.exports = router;