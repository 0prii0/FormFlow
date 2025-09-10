// backend/models/Employee.js
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    empId: {
      type: String,
      required: true,
      unique: true,
    },
    empName: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"], 
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
