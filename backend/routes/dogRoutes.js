import express from "express";
import DogAdoption from "../models/Dog.js";
import * as XLSX from "xlsx";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dogAdoption = new DogAdoption(req.body);
    await dogAdoption.save();
    res
      .status(201)
      .json({ message: "dog data saved successfully!", dogAdoption });
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

router.get("/export", async (req, res) => {
  try {
    const dogsAdoptions = await DogAdoption.find().lean();

    if (!dogsAdoptions.length) {
      return res.status(404).json({ message: "No dog adoption data found" });
    }

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(dogsAdoptions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "DogAdoptions");

    // Write to buffer
    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    // Set headers
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=dog_adoptions.xlsx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.send(buffer);
  } catch (error) {
    console.error("Dog Export Error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
