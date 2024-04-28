const {
  createProcessService,
  getSingleProcessService,
  getAllProcessService,
  deleteSingleProcessService,
} = require("../service/process.service");


//  Create process controller 
exports.createProcess = async (req, res, next) => {
  try {
    const result = await createProcessService();
    res.status(200).json({
      status: "success",
      message: "Successfully created the process",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couldn't create the process",
    });
  }
};


//Get all process controller
exports.getAll = async (req, res, next) => {
  try {
    const result = await getAllProcessService();
    res.status(200).json({
      status: "success",
      message: "Successfully getting all process",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couldn't create the process",
    });
  }
};


//Get single process controller
exports.getSingle = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const result = await getSingleProcessService(pid);
    res.status(200).json({
      status: "success",
      message: "Successfully getting single process service",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couldn't create the process",
    });
  }
};


// Delete Single process controller
exports.deleteProcess = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const result = await deleteSingleProcessService(pid);
    res.status(200).json({
      status: "success",
      message: "Successfully deleting single process service",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couldn't create the service",
    });
  }
};
