const express = require('express');
const app = express();

app.use(express.json()); // required for POST body parsing

// HTML homepage
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('<h1>Programming World!</h1>');
});

// Query parameters: /userQuery?userId=707&name=you
app.get("/userQuery", (req, res) => {
  const { userId, name } = req.query;
  res.send({ userId, name });
});

// Dynamic parameters: /user/sri/apple
app.get("/user/:firstName/:lastName", (req, res) => {
  const { firstName, lastName } = req.params;
  res.send({ firstName, lastName });
});

// Basic CRUD
app.get("/user", (req, res) => {
  res.send({ firstName: "Apple", lastName: "Ball" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

// Match all methods
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

// Regex route
app.get(/.*fly$/, (req, res) => {
  res.send("You hit a route ending with 'fly'!");
});

// Start server
app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
