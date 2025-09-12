import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    console.log("🚀 ~ Incoming req:", req.body);

    await employee.save();
    res
      .status(201)
      .json({ message: "employee data saved successfully!", employee });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/export", async (req, res) => {
  try {
    const employees = await Employee.find().lean();

    if (!employees.length) {
      return res.status(404).json({ message: "No Employee data found" });
    }

    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    res.setHeader("Content-Disposition", "attachment; filename=students.xlsx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);
  } catch (error) {
   res.status(500).json({error: error.message})
  }
});

export default router;
