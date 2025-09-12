import express from "express";
import Dog from "../models/Dog.js";
import DogAdoption from "../models/Dog.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dogAdoption = new DogAdoption(req.body);
    await dogAdoption.save();
    res.status(201).json({ message: "employee data saved successfully!", dogAdoption });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const dogsAdoptions = await DogAdoption.find();
    res.json(dogsAdoptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;