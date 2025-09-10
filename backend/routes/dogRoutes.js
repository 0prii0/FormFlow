import express from "express";
import Dog from "../models/Dog.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dog = new Dog(req.body);
    await dog.save();
    res.status(201).json({ message: "employee data saved successfully!", dog });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;