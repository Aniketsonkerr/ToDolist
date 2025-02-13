import express from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/toDo.controller.js";

const router = express.Router();

// GET all to-do items
router.get("/", getAllTodos);

// POST a new to-do item
router.post("/", createTodo);

// PUT update a to-do item
router.put("/:id", updateTodo);

// DELETE a to-do item
router.delete("/:id", deleteTodo);

export default router;
