import express from "express";
import Dog from "../models/Dog.js";
import DogAdoption from "../models/Dog.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dogAdoption = new DogAdoption(req.body);
    await dogAdoption.save();
    res.status(201).json({ message: "employee data saved successfully!", dogAdoption });
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




router.get('/export', async(req, res) => {
try {
  const dogsAdoptions = await DogAdoption.find().lean();
  if (!dogsAdoptions.length) {
    return res.status(404).json ({message: "No Data Found"});
  };

  const worksheet = XLSX.utils.json_to_sheet();
  const workbook = XLSX.utils.book_new();
  XLSX.book_append_sheet(workbook,worksheet, 'Dogs Adoption');


  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    res.setHeader("Content-Disposition", "attachment; filename=students.xlsx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);

} catch (error) {
  res.status(500).json({error: error.message});
}
  

})

export default router;