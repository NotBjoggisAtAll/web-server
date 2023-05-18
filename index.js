const express = require("express");

const app = express();

// Serve static content in folder /app
app.use(express.static("app"));

app.listen(20000, () => console.log("Server running on port 20000"));
