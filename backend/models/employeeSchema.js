const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
 {
    empId: { type: String, required: true, unique: true }, 
    empName: { type: String, required: true },             
    department: { type: String, required: true },          
    gender: { 
      type: String, 
      enum: ["male", "female"], 
      required: true 
    },                                                     
    phone: { type: String, required: true },               
    email: { type: String, required: true, unique: true }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);