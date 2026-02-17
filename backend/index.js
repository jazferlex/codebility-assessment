const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

let todos = [
];
let id_counter = 1;

app.use(express.json());
// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  if (Number.isNaN(todoId)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  if (!todos.some((todo) => todo.id === todoId)) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.json(todos.find((todo) => todo.id === todoId));
});

app.post("/api/todos", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newTodo = { id: id_counter++, title: req.body.title, completed: false, createdAt: new Date() };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  if (Number.isNaN(todoId)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  if (req.body.completed !== undefined && typeof req.body.completed !== "boolean") {
    return res.status(400).json({ message: "completed must be a boolean" });
  }
  const todo = todos.find((t) => t.id === todoId);

  if (todo) {
    todo.title = req.body.title !== undefined ? req.body.title : todo.title;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.delete("/api/todos/:id", (req, res) => {  
  const todoId = parseInt(req.params.id);
  if (Number.isNaN(todoId)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  const index = todos.findIndex((t) => t.id === todoId);
  if (index !== -1) {
    todos.splice(index, 1);
    return res.status(204).send();
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
