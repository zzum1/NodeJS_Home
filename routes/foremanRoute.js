const express = require('express');
const foremanController = require('../controllers/foremanController');

const router = express.Router();

router
    .route("/")
    .get(foremanController.getAllForeman)
    .post(foremanController.addForeman);

router
    .route("/:id")
    .patch(foremanController.updateForeman)
    .delete(foremanController.deleteForeman);

module.exports = router;