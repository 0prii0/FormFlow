// backend/routes/studentRoutes.js
import express from 'express';
import Student from '../models/Student.js'
import XLSX from 'xlsx';

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


router.get('/export', async (req, res) => {
  try {
    const students = await Student.find().lean();

    if (!students.length) {
      return res.status(404).json({ message: 'No student data found' });
    }

    // Create worksheet & workbook
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

    // Convert workbook to buffer
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Send as downloadable file
    res.setHeader('Content-Disposition', 'attachment; filename=students.xlsx');
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
