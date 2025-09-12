import axios from "axios";
import React from "react";



const DataTable = ({ columns, data, exportEndpoint }) => {

const handleExport = async () => {
try {
  const response = await axios.get(exportEndpoint,{
    responseType: "blob",
  });

 const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.xlsx"); 
      document.body.appendChild(link);
      link.click();
  
} catch (error) {
  console.error("Export error", error);
  alert("Failed to Export data");
}
}


  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          onClick={handleExport}
          className="bg-green-500 text-white px-2 py-2 rounded shadow hover:bg-green-600 transition"
        >
          Export Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 py-2 text-sm text-gray-700 border-b"
                    >
                      {row[col] || "-"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
