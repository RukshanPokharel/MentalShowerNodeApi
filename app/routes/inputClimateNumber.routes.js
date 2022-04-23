module.exports = app => {
    const inputClimateNumber = require("../controllers/inputClimateNumberController.js");
    var router = require("express").Router();
    // Create a new inputClimateNumber
    router.post("/", inputClimateNumber.create);
    // Retrieve all inputClimateNumber
    router.get("/", inputClimateNumber.findAll);
    
    // // Retrieve all published userInfo
    // router.get("/published", userInfo.findAllPublished);

    // Retrieve a single inputClimateNumber with id
    router.get("/:id", inputClimateNumber.findOne);
    // Update a inputClimateNumber with id
    router.put("/:id", inputClimateNumber.update);
    // Delete a inputClimateNumber with id
    router.delete("/:id", inputClimateNumber.delete);
    // Delete all inputClimateNumber
    router.delete("/", inputClimateNumber.deleteAll);
    
    app.use('/api/inputClimateNumber', router);
  };