const db = require("../models");
const HelpQuestions = db.helpQuestions;
const Op = db.Sequelize.Op;

// Create new helpQuestions
exports.create = (req, res) => {
  // Validating client request
  if (!req.body.question) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const helpQuestions = {
   
    question: req.body.question,
    questionNumber: req.body.questionNumber

  };

  // Save helpQuestions in the database
  HelpQuestions.create(helpQuestions)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the HelpQuestions."
      });
    });
};

// Retrieve or Get all HelpQuestions from the database.
exports.findAll = (req, res) => {
    const question = req.query.question;
    var condition = question ? { question: { [Op.like]: `%${question}%` } } : null;
    HelpQuestions.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving HelpQuestions."
        });
      });
};
// Find a single HelpQuestions with an id provided.
exports.findOne = (req, res) => {
    const id = req.params.id;
    HelpQuestions.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find HelpQuestions with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving HelpQuestions with id=" + id
        });
      });
};
// Update a HelpQuestions by the id in the request parameter
exports.update = (req, res) => {
    const id = req.params.id;
    HelpQuestions.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HelpQuestions was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update HelpQuestions with id=${id}. Maybe HelpQuestions was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating HelpQuestions with id=" + id
        });
      });
};
// Delete a HelpQuestions with the specified id in the request parameter
exports.delete = (req, res) => {
    const id = req.params.id;
    HelpQuestions.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HelpQuestions was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete HelpQuestions with id=${id}. Maybe HelpQuestions was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete HelpQuestions with id=" + id
        });
      });
};
// Delete all HelpQuestions from the database.
exports.deleteAll = (req, res) => {
    HelpQuestions.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} HelpQuestions were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all HelpQuestions."
          });
        });
};