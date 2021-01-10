// vacancyController.js
// Import vacancy model
Vacancy = require('../model/vacancyModel');

// Get all the vacancies, UNFILTERED
exports.getVacancies = function (req, res) {
    Vacancy.get(function (err, vacancies) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return;
        }
        res.json({
            status: "success",
            message: "Vacancies retrieved successfully",
            data: vacancies
        });
    });
}
