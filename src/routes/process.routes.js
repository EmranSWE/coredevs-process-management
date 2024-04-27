const express = require('express');
const processController = require("../controller/process.controller");

const router= express.Router();

router.post("/create-process",processController.createProcess);
router.get("/get-all",processController.getAll);
router.get("/get-single/:pid",processController.getSingle);
router.delete("/delete-process/:pid", processController.deleteProcess);



module.exports = router