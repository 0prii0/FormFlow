import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router()

router.post('/', async(req, res) => {
 try {
    const employee = new Employee(req.body);
    console.log("🚀 ~ Incoming req:", req.body)
    
    await employee.save();
    res.status(201).json({message: "employee data saved successfully!", employee})
 } catch (error) {
    res.status(400).json({error: error.message}); 
 }
});

router.get('/', async(req, res) => {
    try {
       const employees = await Employee.find();
    res.json(employees) 
    } catch (error) {
        res.status(500).json({error: error.message})
    }

})








export default router;