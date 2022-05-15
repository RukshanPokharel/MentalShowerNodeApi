module.exports = app => {
    const helpQuestion = require("../controllers/helpQuestionsContoller.js");
    var router = require("express").Router();
    // Create a new helpQuestion
    router.post("/", helpQuestion.create);
    // Retrieve all helpQuestion
    router.get("/", helpQuestion.findAll);

    // Retrieve a single helpQuestion with id
    router.get("/:id", helpQuestion.findOne);
    // Update a helpQuestion with id
    router.put("/:id", helpQuestion.update);
    // Delete a helpQuestion with id
    router.delete("/:id", helpQuestion.delete);
    // Delete all helpQuestion
    router.delete("/", helpQuestion.deleteAll);
    
    app.use('/api/helpQuestion', router);
  };