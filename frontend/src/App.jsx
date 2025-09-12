import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from './pages/StudentForm';
import EmployeeForm from './pages/EmployeeForm'
import DogAdoptionForm from './pages/DogAdoptionForm'
import Navbar from './components/Navbar'
import StudentDataPage from './pages/StudentData';
import EmployeeDataPage from './pages/EmployeeData';
import DogAdoptionData from './pages/DogAdoptionData';




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
            <Route path = "/students" element={<StudentDataPage />} />
            <Route path = "/employees" element ={<EmployeeDataPage/>} />
            <Route path = "/dogs-adoptions" element={<DogAdoptionData/>} />
            

            <Route path="/" element={<StudentForm />} />
          </Routes>
        </div>
      </div>

    </Router>

  )

}

export default App