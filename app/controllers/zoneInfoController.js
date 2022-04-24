const db = require("../models");
const ZoneInfo = db.zoneInfo;
const Op = db.Sequelize.Op;

// Create and Save a new ZoneInfo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.zoneNumber) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a ZoneInfo
  const zoneInfo = {
    zoneNumber: req.body.zoneNumber,
    zoneArea: req.body.zoneArea
  };

  // Save ZoneInfo in the database
  ZoneInfo.create(zoneInfo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ZoneInfo."
      });
    });
};

// Retrieve all ZoneInfo from the database.
exports.findAll = (req, res) => {
    // req.query.roomNumber to get query string from the Request
    const zoneNumber = req.query.zoneNumber;
    var condition = zoneNumber ? { zoneNumber: { [Op.like]: `%${zoneNumber}%` } } : null;
    ZoneInfo.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ZoneInfo."
        });
      });
};
// Find a single ZoneInfo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    ZoneInfo.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find ZoneInfo with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ZoneInfo with id=" + id
        });
      });
};
// Update a ZoneInfo by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    ZoneInfo.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ZoneInfo was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ZoneInfo with id=${id}. Maybe ZoneInfo was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating UserInfo with id=" + id
        });
      });
};
// Delete a ZoneInfo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    ZoneInfo.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ZoneInfo was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ZoneInfo with id=${id}. Maybe ZoneInfo was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ZoneInfo with id=" + id
        });
      });
};
// Delete all ZoneInfo from the database.
exports.deleteAll = (req, res) => {
    ZoneInfo.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} ZoneInfos were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all ZoneInfos."
          });
        });
};

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };