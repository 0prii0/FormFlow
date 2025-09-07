import React from 'react';
import DynamicForm from '../components/dynamicForm';




const StudentForm = () => {
  const formSections = [
    {
      heading: "Student Information",
      fields: [
        { 
            name: "firstName",
             label: "First Name", 
             type: "text", 
             placeholder: "Enter First Name", 
             required: true 
            },
        { 
            name: "middleName", 
            label: "Middle Name", 
            type: "text", 
            placeholder: "Enter Middle Name", 
            required: false 
        },
        { 
            name: "lastName", 
            label: "Last Name", 
            type: "text", 
            placeholder: "Enter Last Name", 
            required: true 
        },
        { 
            name: "dateOfBirth", 
            label: "DOB", 
            type: "date", 
            placeholder: "Date Of Birth", 
            required: true 
        },
        { 
            name: "studentID", 
            label: "Student ID", 
            type: "number", 
            required: true 
        }
      ]
    },
    {
      heading: "Student Address",
      fields: [
        { 
            name: "streetAddress", 
            label: "Street Address", 
            type: "text", 
            placeholder: "Street Address", 
            required: true 
        },
        { 
            name: "city", 
            label: "City", 
            type: "text", 
            placeholder: "Enter city", 
            required: true 
        },
        { 
            name: "state", 
            label: "State", 
            type: "text", 
            placeholder: "Enter state", 
            required: true 
        },
        { 
            name: "country", 
            label: "Country", 
            type: "text", 
            placeholder: "Enter country", 
            required: true 
        },
        {
            name: "zipcode", 
            label: "Zipcode", 
            type: "text", 
            placeholder: "Enter zipcode", 
            required: true 
        }
      ]
    },
    {
      heading: "Personal Information",
      fields: [
        { 
            name: "email", 
            label: "Email",
             type: "email", 
             placeholder: "Enter email", 
             required: true
             },
        { 
            name: "phone", 
            label: "Phone Number", 
            type: "tel", 
            placeholder: "Enter phone number", 
            required: false 
        }
      ]
    }
  ];

  

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10">
        <DynamicForm title="College Registration Form" sections={formSections} />
      </div>
    </div>
  );
};

export default StudentForm;


