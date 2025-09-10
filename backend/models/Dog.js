
const mongoose = require("mongoose");

const DogAdoptionSchema = new mongoose.Schema(
  {
    nameOfDog: { type: String, required: true },          
    adopterName: { type: String, required: true },          
    email: { type: String, required: true, unique: true }, 
    phone: { type: String, required: true },                
    city: { type: String, required: true },                
    state: { type: String, required: true },                
    country: { type: String, required: true },              
    
    currentlyPets: { 
      type: String, 
      enum: ["yes", "no"], 
      required: true 
    },                                                      
  },
  { timestamps: true }
);

module.exports = mongoose.model("DogAdoption", DogAdoptionSchema);
