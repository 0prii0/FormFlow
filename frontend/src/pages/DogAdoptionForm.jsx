import React from "react";
import DynamicForm from "../components/dynamicForm";

const DogAdoptionForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const dogFormFields = [
    {
      heading: "Dog Adoption Form",
      fields: [
        {
          name: "nameOfDog",
          label: "Name of the dog",
          type: "text",
          required: true,
        },
        {
          name: "adopterName",
          label: "Adopter's Name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Adopter's Email",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "tel",
          required: true,
          pattern: "^[0-9]{10}$",
          title: "Phone number must be exactly 10 digits",
        },
        {
          name: "city",
          label: "City",
          type: "text",
          required: true,
        },
        {
          name: "state",
          label: "State",
          type: "text",
          required: true,
        },
        {
          name: "country",
          label: "Country",
          type: "text",
          required: true,
        },
        {
          name: "currentlyPets",
          label: "Do you currently have any pets?",
          type: "radio",
          required: true,
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10">
        <DynamicForm
          title="Dog Adoption Form"
          sections={dogFormFields}
          apiEndpoint={`${API_BASE_URL}/api/dog-adoptions`}
        />
      </div>
    </div>
  );
};

export default DogAdoptionForm;
