const Service = require("../models/serviceModel");

exports.getAllServices = async (req, res) => {
  try {
    const service = await Service.find();
    res.status(200).json({
      status: "success",
      results: service.length,
      data: {
        service,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        service,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Service not found",
    });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { name, address, manager } = req.body;
    if (!name || !address || !manager) {
      return res.status(400).json({
        status: "Error",
        message: "Please provide all the required fields",
      });
    }
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "service was updated",
      data: {
        service,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "service not found",
      message: err,
    });
  }
};

exports.createService = async (req, res) => {
  try {
    const { name, address, manager } = req.body;
    if (!name || !address || !manager) {
      return res.status(400).json({
        status: "Error",
        message: "Please provide all the required fields",
      });
    }
    const service = await Service.create(req.body);
    res.status(201).json({
      status: "service was created",
      data: {
        service,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "uups, something went wrong!",
      message: error,
    });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        status: "fail",
        message: "It may have been already deleted.",
      });
    }

    await Service.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "service was deleted",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
