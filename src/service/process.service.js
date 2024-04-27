let processes = [];
// Creating A Process Service
exports.createProcessService = async () => {
  const newProcess = {
    PID: Math.floor(Math.random() * 1000000),
    Creating_time: new Date().toLocaleString(),
  };
  processes.push(newProcess);
  // Set up a timer to log the process data every 5 seconds
  setInterval(() => {
  }, 5000);
  return newProcess
};

// Getting All Process Service
exports.getAllProcessService = async () => {
  return processes;
};

// Getting Single Process by Id
exports.getSingleProcessService = async (pid) => {
  const process = processes.find((p) => p.PID === parseInt(pid));
  if (process) {
    // Mock log data
    const logData = Array.from({ length: 3 }, (_, i) => {
      return new Date(new Date().getTime() + i * 5000).toLocaleString(); // Incrementing time for mock data
    });
    return logData
  } else {
    res.status(404).json({ message: "Process not found" });
  }
};

exports.deleteSingleProcessService = async (pid) => {
  processes = processes.filter((p) => p.PID !== parseInt(pid));
return `Successfully deleted ${pid}!`
};
