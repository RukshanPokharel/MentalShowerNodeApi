module.exports = app => {
    const userInfo = require("../controllers/userInfoController.js");
    var router = require("express").Router();
    // Create a new userInfo
    router.post("/", userInfo.create);
    // Retrieve all userInfo
    router.get("/", userInfo.findAll);
    
    // // Retrieve all published userInfo
    // router.get("/published", userInfo.findAllPublished);

    // Retrieve a single userInfo with id
    router.get("/:id", userInfo.findOne);
    // Update a userInfo with id
    router.put("/:id", userInfo.update);
    // Delete a userInfo with id
    router.delete("/:id", userInfo.delete);
    // Delete all userInfo
    router.delete("/", userInfo.deleteAll);
    
    app.use('/api/userInfo', router);
  };