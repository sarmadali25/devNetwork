const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("HEELO FROM DEVNETWORK");
  res.send("Hello from DevNetwork");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
