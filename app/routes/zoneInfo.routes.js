module.exports = app => {
    const zoneInfo = require("../controllers/zoneInfoController.js");
    var router = require("express").Router();
    // Create a new userInfo
    router.post("/", zoneInfo.create);
    // Retrieve all userInfo
    router.get("/", zoneInfo.findAll);
    
    // // Retrieve all published userInfo
    // router.get("/published", userInfo.findAllPublished);

    // Retrieve a single userInfo with id
    router.get("/:id", zoneInfo.findOne);
    // Update a userInfo with id
    router.put("/:id", zoneInfo.update);
    // Delete a userInfo with id
    router.delete("/:id", zoneInfo.delete);
    // Delete all userInfo
    router.delete("/", zoneInfo.deleteAll);
    
    app.use('/api/zoneInfo', router);
  };