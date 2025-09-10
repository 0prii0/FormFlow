import React from "react";
import axios from 'axios';


function DynamicForm({ title, sections, apiEndpoint }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Submitting Form Data:", data);

    try {
      // Make POST request
      const response = await axios.post(apiEndpoint, data);
      alert("Data submitted successfully!");
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Failed to submit form. Check console for details.");
    }
  };


  return (
    <>
      <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-white text-center drop-shadow-md">
          {title}
        </h1>
      </div>
      <div className="max-w-4xl mx-auto my-10 px-6">
        <form className="space-y-12" onSubmit= {handleSubmit}>
          
          {sections.map((section, sectionIndex) => (
            <div
              className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              key={sectionIndex}
            >
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-indigo-200 pb-3 mb-8">
                {section.heading}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex}>
                    <label
                      htmlFor={field.name}
                      className="mb-3 text-base font-semibold text-gray-700 tracking-wide"
                    >
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>

                    {field.type === "radio" ? (
                     <div className="flex flex-col space-y-4 pl-2">
                        {field.options?.map((option, optionIndex) => (
                          <label
                            key={optionIndex}
                            className="inline-flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
                          >
                            <input
                              type="radio"
                              name={field.name}
                              value={option.value}
                              required={field.required}
                              className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            />
                            <span className="text-gray-700">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-5 py-3 mt-1 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-gray-50 hover:bg-white text-gray-800"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 hover:from-green-500 hover:to-green-600 transition-all duration-300"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "green";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default DynamicForm;
