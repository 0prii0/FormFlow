// backend/models/Student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  studentID: { type: Number, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
