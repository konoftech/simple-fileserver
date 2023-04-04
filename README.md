# simple-fileserver


T0 setup :


mkdir nodejs-rest-api
cd nodejs-rest-api
npm init -y
npm install express multer cors fs

Prerequisites

Node.js and NPM installed on your computer
Step 1: Clone the project

Open a terminal or command prompt and navigate to the directory where you want to clone the project
Run the command git clone https://github.com/<username>/nodejs-rest-api.git, replacing <username> with the username of the repository owner
Step 2: Install dependencies

Navigate to the project directory by running the command cd nodejs-rest-api
Run the command npm install to install the required dependencies
Step 3: Run the server

Run the command node index.js to start the server
The server will be accessible at http://localhost:3000
Step 4: Testing the API

To test the API, you can use a tool like Postman or cURL
To upload a file, send a POST request to http://localhost:3000/files with the file attached as a form-data field named file
To get a list of all files, send a GET request to http://localhost:3000/files
To get a specific file, send a GET request to http://localhost:3000/files/<filename>, replacing <filename> with the name of the file
To update a file, send a PUT request to http://localhost:3000/files/<filename> with the updated file contents in the request body as JSON
To delete a file, send a DELETE request to http://localhost:3000/files/<filename>, replacing <filename> with the name of the file
That's it! You should now be able to integrate and use the Node.js REST application to serve static files and perform CRUD operations on them.
