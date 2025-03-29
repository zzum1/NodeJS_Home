const Foreman = require("../models/foremanModel");

exports.addForeman = async (req, res) => {
  const { firstName, lastName, specialization, photo, city, serviceAssigned } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !specialization ||
    !photo ||
    !city ||
    !serviceAssigned
  ) {
    return res.status(400).json({
      status: "error",
      message: "Please provide all the required fields",
    });
  }

  try {
    const foreman = await Foreman.create(req.body);
    res.status(201).json({
      status: "success",
      data: { foreman },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateForeman = async (req, res) => {
  try {
    const foreman = await Foreman.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: { foreman },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getAllForeman = async (req, res) => {
  try {
    const foreman = await Foreman.find();
    res.status(200).json({
      status: "success",
      data: { foreman },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
exports.deleteForeman = async (req, res) => {
  try {
    const foreman = await Foreman.findById(req.params.id);

    if (!foreman) {
      return res.status(404).json({
        status: "fail",
        message: "Foreman not found",
      });
    }
    await Foreman.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Foreman deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
