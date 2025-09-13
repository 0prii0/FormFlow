import React, {useEffect, useState} from 'react'
import axios from 'axios';
import DataTable from '../components/DataTable';


const EmployeeDataPage = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false)

    const API_BASE_URL = import.meta.env.VITE_API_URL;


// Fetch data from backend
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
               setLoading(true)
               const res = await axios.get(`${API_BASE_URL}/api/employees`)
               setEmployees(res.data) 
            } catch (error) {
                console.error("Error fetching employees:", error)
                
            }finally{
                setLoading(false)
            }
        }

        fetchEmployees()
 }, [API_BASE_URL]);

 // Define table columns based on schema
 const columns = [
    "empId",
    "empName",
    "department",
    "gender",
    "phone",
    "email"

 ]


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Employee Records
        </h1>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <>
            <p className="mb-4 text-gray-600">
              Total Records: <span className="font-bold">{employees.length}</span>
            </p>
            <DataTable columns={columns} data={employees} exportEndpoint={`${API_BASE_URL}/api/employees/export`} />
            </>
             )}
      </div>
    </div>
  );
};

export default EmployeeDataPage;