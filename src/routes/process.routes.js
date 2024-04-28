const express = require('express');
const processController = require("../controller/process.controller");

const router= express.Router();

router.post("/create-process",processController.createProcess); //creating process route
router.get("/get-all",processController.getAll); // Get all process route
router.get("/get-single/:pid",processController.getSingle); // Get single process routes
router.delete("/delete-process/:pid", processController.deleteProcess); // Delete process routes



module.exports = router