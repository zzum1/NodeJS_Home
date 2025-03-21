const express = require("express");
const serviceController = require("../controllers/serviceController.js");

const router = express.Router();

router
  .route("/")
  .get(serviceController.getAllServices)
  .post(serviceController.createService);

router
  .route("/:id")
  .get(serviceController.getSingleService)
  .patch(serviceController.updateService)
  .delete(serviceController.deleteService);

module.exports = router;
