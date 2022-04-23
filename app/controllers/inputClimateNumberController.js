const db = require("../models");
const InputClimateNumbers = db.inputClimateNumbers;
const Op = db.Sequelize.Op;

// Create and Save a new InputClimateNumbers
exports.create = (req, res) => {
  // Validate request
  if (!req.body.humidity) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a InputClimateNumbers
  const inputClimateNumbers = {
    humidity: req.body.humidity,
    temperature: req.body.temperature,
    airQuality: req.body.airQuality,
    zoneNo: req.body.zoneNo,
    gender: req.body.gender
  };

  // Save InputClimateNumbers in the database
  InputClimateNumbers.create(inputClimateNumbers)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the InputClimateNumbers."
      });
    });
};

// Retrieve all InputClimateNumbers from the database.
exports.findAll = (req, res) => {
    const humidity = req.query.humidity;
    var condition = humidity ? { humidity: { [Op.like]: `%${humidity}%` } } : null;
    InputClimateNumbers.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving InputClimateNumbers."
        });
      });
};
// Find a single InputClimateNumbers with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    InputClimateNumbers.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find InputClimateNumbers with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving InputClimateNumbers with id=" + id
        });
      });
};
// Update a InputClimateNumbers by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    InputClimateNumbers.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "InputClimateNumbers was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update InputClimateNumbers with id=${id}. Maybe InputClimateNumbers was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating InputClimateNumbers with id=" + id
        });
      });
};
// Delete a InputClimateNumbers with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    InputClimateNumbers.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "InputClimateNumbers was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete InputClimateNumbers with id=${id}. Maybe InputClimateNumbers was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete InputClimateNumbers with id=" + id
        });
      });
};
// Delete all InputClimateNumbers from the database.
exports.deleteAll = (req, res) => {
    InputClimateNumbers.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} InputClimateNumbers were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all InputClimateNumbers."
          });
        });
};

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };