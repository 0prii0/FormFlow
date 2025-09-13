import React from "react";
import DynamicForm from "../components/DynamicForm";


const EmployeeForm = () => {

const API_BASE_URL = import.meta.env.VITE_API_URL;

  const employeeFormSections = [
    {
      heading: "Employee Information",
      fields: [
        {
          name: "empId",
          label: "Employee ID",
          type: "text",
          required: true
        },
        {
          name: "empName",
          label: "Employee Name",
          type: "text",
          required: true
        },
        {
          name: "department",
          label: "Department",
          type: "text",
          required: true
        },
        {
          name: "gender",
          label: "Gender",
          type: "radio",
          required: true,
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
        },
        {
          name: "phone",
          label: "Phone",
          type: "tel",
          required: true,
          pattern: "^[0-9]{10}$", 
          title: "Phone number must be exactly 10 digits",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10">
      <DynamicForm
        title="Employee Registration Form"
        sections={employeeFormSections}
        apiEndpoint={`${API_BASE_URL}/api/employees`}
      />
      </div>
    </div>
  );
};

export default EmployeeForm;
