import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

const DogAdoptionData = () => {
  const [dogsAdoptions, setDogsAdoptions] = useState([]);
  const [loading, setLoading] = useState(false);

   const API_BASE_URL = import.meta.env.VITE_API_URL;

  // Data fetching from backend
  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE_URL}/api/dog-adoptions`);
        setDogsAdoptions(res.data);
      } catch (error) {
        console.error("Error fetching Dogs Data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, [API_BASE_URL]);

//   define columns
const columns = [
    "nameOfDog",
    "adopterName",
    "email",
    "phone",
    "city",
    "state",
    "country",
    "currentlyPets"
]

  return ( 
<div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dog Adoption Records
        </h1>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <>
            <p className="mb-4 text-gray-600">
              Total Records: <span className="font-bold">{dogsAdoptions.length}</span>
            </p>
            <DataTable columns={columns} data={dogsAdoptions} exportEndpoint={`${API_BASE_URL}/api/dog-adoptions/export`}/>
            </>
             )}
      </div>
    </div>
  )
};

export default DogAdoptionData;
