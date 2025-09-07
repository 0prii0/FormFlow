import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from './pages/studentForm'
import EmployeeForm from './pages/EmployeeForm'
import DogAdoptionForm from './pages/DogAdoptionForm'
import Navbar from './components/Navbar'




const App = () => {

  return (

    <Router>
       <div className="min-h-screen bg-gray-100">
        
        <Navbar />

        <div className="p-10">
          <Routes>
            <Route path="/student" element={<StudentForm />} />
            <Route path="/employee" element={<EmployeeForm />} />
            <Route path="/dog-adoption" element={<DogAdoptionForm />} />
            

            {/* <Route path="*" element={<StudentForm />} /> */}
          </Routes>
        </div>
      </div>

    </Router>

  )

}

export default App