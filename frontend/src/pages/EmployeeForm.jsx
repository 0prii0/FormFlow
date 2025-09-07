import React from "react";
import DynamicForm from "../components/dynamicForm";


const EmployeeForm = () => {
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
          name: "Phone",
          label: "Phone",
          type: "tel",
          required: true,
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
      />
      </div>
    </div>
  );
};

export default EmployeeForm;
