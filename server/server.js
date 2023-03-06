const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("main has been triggerd!");
  return [
    { name: "Mohamed", age: 24 },
    { name: "Alae", age: 29 },
    { name: "Ahmed", age: 34 },
  ];
});

app.post("/api/users", (req, res) => {
  // Code for handling POST request for users
});

// Define other routes as needed

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
