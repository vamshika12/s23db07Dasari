var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dog_controller = require('../controllers/dog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// dog ROUTES ///
// POST request for creating a dog.
router.post('/dogs', dog_controller.dog_create_post);
// DELETE request to delete dog.
router.delete('/dogs/:id', dog_controller.dog_delete);
// PUT request to update dog.
router.put('/dogs/:id', dog_controller.dog_update_put);
// GET request for one dog.
router.get('/dogs/:id', dog_controller.dog_detail);
// GET request for list of all dog items.
router.get('/dogs', dog_controller.dog_list);
// Get all items data
module.exports = router;