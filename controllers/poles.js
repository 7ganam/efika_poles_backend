const Pole = require('../models/pole');
const asyncHandler = require('../utils/async');

// @desc      Get poles
// @route     GET /api/v1/poles
// @access   TODO: Private
exports.getPoles = asyncHandler(async (req, res) => {
  const poles = await Pole.find();
  return res.status(200).json({
    success: true,
    count: poles.length,
    data: poles
  });
});

// @desc      create a pole entry
// @route     POST /api/v1/poles
// @access    TODO: Private
exports.addPole = asyncHandler(async (req, res) => {
  const pole = await Pole.create({
    sim_no: req.body.sim_no,
    location: req.body.location,
    notes: req.body.notes
  });
  res.status(201).json({
    success: true,
    data: pole
  });
});
