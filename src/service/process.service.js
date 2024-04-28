let processes = [];

// Function to format creation time
const creationTime = () => {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = currentDate
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, ".");
  return `${time} ${date}`;
};

// Creating A Process Service
exports.createProcessService = async () => {
  const newProcess = {
    PID: Math.floor(Math.random() * 1000000),
    "Creation time": creationTime(),
  };

  processes.push({ PID: newProcess.PID, logs: [creationTime()] });
// Log the timestamp after every 5 second based on pid
  setInterval(() => {
    const logTime = creationTime();
    const processIndex = processes.findIndex(
      (process) => process.PID === newProcess.PID
    );
    if (processIndex !== -1) {
      processes[processIndex].logs.push(logTime);
    }
  }, 5000);

  return newProcess;
};

// Getting All Process Service
exports.getAllProcessService = async () => {
  const getAllProcess = processes.map((process) => ({
    PID: process.PID,
    "Creation time": process.logs[0],
  }));
  return getAllProcess;
};

// Getting Single Process by Id
exports.getSingleProcessService = async (pid) => {
  const process = processes.find((p) => p.PID === parseInt(pid));
  if (process) {
    const logTimes = process.logs || [];
    return logTimes;
  } else {
    throw new Error("Process not found");
  }
};

// Delete Single Process
exports.deleteSingleProcessService = async (pid) => {
  processes = processes.filter((p) => p.PID !== parseInt(pid));
  return `${pid} The process Has been successfully deleted.`;
};
