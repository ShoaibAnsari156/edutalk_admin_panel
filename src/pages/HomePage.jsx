import React, { useState } from "react";
import { Menu, Upload, User } from "lucide-react";
import Papa from "papaparse";

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [csvData, setCsvData] = useState({});

  const handleCsvUpload = (event, category) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          setCsvData((prevData) => ({ ...prevData, [category]: result.data }));
        },
        header: true,
      });
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <div
          className={`bg-[rgb(65,105,225)] text-white ${
            isCollapsed ? "w-16" : "w-64"
          } transition-all duration-300 p-4`}
        >
          <button
            className="mb-4 bg-blue-700 p-2 rounded"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu />
          </button>
          {!isCollapsed && (
            <ul className="space-y-4">
              {["HODs", "Principal", "Teachers", "Students"].map((category) => (
                <li key={category} className="flex flex-col">
                  <div
                    className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded"
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === category ? null : category
                      )
                    }
                  >
                    <User /> <span>{category}</span>
                  </div>
                  {activeCategory === category && (
                    <label className="flex items-center space-x-2 cursor-pointer bg-blue-700 p-2 rounded text-white mt-2">
                      <Upload /> <span>Upload CSV</span>
                      <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                        onChange={(e) => handleCsvUpload(e, category)}
                      />
                    </label>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-1 p-6 flex flex-col items-center overflow-auto">
          {activeCategory && csvData[activeCategory]?.length > 0 && (
            <div className="mt-6 w-full max-w-4xl">
              <h2 className="text-xl font-semibold mb-4 text-center">
                {activeCategory} Data
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded border">
                  <thead>
                    <tr className="bg-gray-200 border-b">
                      {Object.keys(csvData[activeCategory][0]).map(
                        (key, index) => (
                          <th
                            key={index}
                            className="py-2 px-4 border text-left whitespace-nowrap"
                          >
                            {key}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {csvData[activeCategory].map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b hover:bg-gray-100">
                        {Object.values(row).map((value, colIndex) => (
                          <td
                            key={colIndex}
                            className="py-2 px-4 border text-left whitespace-nowrap"
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
