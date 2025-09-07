const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    studentID: { type: Number, required: true, unique: true },

    address: {
      streetAddress: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      zipcode: { type: String, required: true },
    },

    email: { type: String, required: true, unique: true },
    phone: { type: String }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);