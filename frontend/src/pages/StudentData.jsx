import React, {useState, useEffect} from 'react'
import axios from "axios";
import DataTable from '../components/DataTable';

const StudentDataPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true)
        const res = await axios.get("http://localhost:5000/api/students");
        setStudents(res.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Define table columns based on schema
  const columns = [
    "firstName",
    "middleName",
    "lastName",
    "dateOfBirth",
    "studentID",
    "streetAddress",
    "city",
    "state",
    "country",
    "zipcode",
    "email",
    "phone",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Student Records
        </h1>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <>
            <p className="mb-4 text-gray-600">
              Total Records: <span className="font-bold">{students.length}</span>
            </p>
            <DataTable columns={columns} data={students} />
          </>
        )}
      </div>
    </div>
  );
};

export default StudentDataPage;
