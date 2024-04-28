# Process Management System

This is a simple process management system . It provides four endpoints for managing processes: `create-process`, `get-all`, `get-single`, and `delete-process`.

## Description

The system allows users to create processes, retrieve all processes, retrieve a single process by its ID, and delete a process by its ID. Each process has a PID (Process ID) and a creation time. Additionally, the system logs the process data every 5 seconds after creation.
### [demonstrative video: ](https://www.loom.com/share/2f8e84b5411245f0bfd155f42cc62668?sid=e4d9ffb6-7d11-477b-b697-7818d65c5196)

## Endpoints
### 1. Create Process
- **Endpoint:** `POST /api/v1/process/create-process`
- **Description:** Creates a new process and returns its PID along with the creation time.
- **Response:** 
{
"PID": 422232,
"Creating_time": "10:30pm 24.04.2024"
}

### 2. Get All Processes
- **Endpoint:** `GET /api/v1/process/get-all`
- **Description:** Retrieves all processes along with their PIDs and creation times.
- **Response:**
[{"PID": 422232,"Creating_time": "10:30pm 24.04.2024"},
{"PID": 422632,"Creating_time": "10:30pm 24.04.2024"},]


### 3. Get Single Process
- **Endpoint:** `GET /api/v1/process/get-single/:PID`
- **Description:** Retrieves the log data for a single process identified by its PID.
- **Request Params:**
- `PID`: The Process ID of the process to retrieve.
- **Response:**
["10:30pm 24.04.2024","10:30pm 24.04.2024","10:31pm 24.04.2024",...]

### 4. Delete Process
- **Endpoint:** `DELETE /api/v1/process/delete-process/:PID`
- **Description:** Deletes a process identified by its PID.
- **Request Params:**
- `PID`: The Process ID of the process to delete.
- **Response:** 
{
"message": "Process with PID 422232 deleted successfully."
}

## Usage

1. Start the server.
2. Use the provided endpoints to manage processes as needed.

## Example Usage

```bash
# Create a new process
POST http://localhost:3000/api/v1/process/create-process

# Retrieve all processes
http://localhost:3000/api/v1/process/get-all

# Retrieve log data for a single process
http://localhost:3000/api/v1/process/get-single/422232

# Delete a process
DELETE http://localhost:3000/api/v1/process/delete-process/422232

Setup
Clone this repository.
Install dependencies: npm install
Start the server: npm start
Technologies Used
Node.js
Express.js
