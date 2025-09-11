// backend/routes/studentRoutes.js
import express from 'express';
import Student from '../models/Student.js'

const router = express.Router();

// POST: Save Student Data
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Student saved successfully', student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: Get all students (optional)
router.get('/', async (req, res) => {
 try {
    const students = await Student.find();

    // Format DOB for each student
    const formattedDate = students.map((e) => ({
      ...e._doc,

      dateOfBirth: e.dateOfBirth
        ? new Date(e.dateOfBirth).toLocaleDateString('en-GB') 
        : null,
    }));

    res.json(formattedDate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
