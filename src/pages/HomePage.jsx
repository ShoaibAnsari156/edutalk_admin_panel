import React, { useState } from "react";
import { Menu, Plus, Trash2, Edit, Upload, List, User, X } from "lucide-react";

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showHodForm, setShowHodForm] = useState(false);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [hodDetails, setHodDetails] = useState({ name: "", type: "", branch: "" });
  const [studentDetails, setStudentDetails] = useState({ enrollment: "", year: "", branch: "", course: "" });

  const handleHodFormSubmit = (event) => {
    event.preventDefault();
    console.log(hodDetails);
    setShowHodForm(false);
  };

  const handleStudentFormSubmit = (event) => {
    event.preventDefault();
    console.log(studentDetails);
    setShowStudentForm(false);
  };

  return (
    <div className="flex h-screen">
      <div className={`bg-[rgb(65,105,225)] text-white ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 p-4`}>
        <button className="mb-4 bg-blue-700 p-2 rounded" onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu />
        </button>
        {!isCollapsed && (
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded" onClick={() => setShowHodForm(true)}><User /> <span>Add HODs</span></li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded"><User /> <span>Add Principal</span></li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded"><User /> <span>Add Teachers</span></li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded" onClick={() => setShowStudentForm(true)}><User /> <span>Add Students</span></li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded"><Trash2 /> <span>Delete</span></li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded"><List /> <span>Get</span></li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded relative">
              <Upload /> <span>Upload CSV</span>
              <input type="file" accept=".csv" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
            </li>
          </ul>
        )}
      </div>
      <div className="flex-1 p-6 flex justify-center items-center">
        {showHodForm && (
          <div className="bg-gray-100 p-6 rounded shadow-md w-96 relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={() => setShowHodForm(false)}>
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Add HOD</h2>
            <form onSubmit={handleHodFormSubmit}>
              <input type="text" placeholder="HOD Name" value={hodDetails.name} onChange={(e) => setHodDetails({ ...hodDetails, name: e.target.value })} required className="border p-2 w-full mb-2" />
              <div className="mb-2">
                <label className="mr-4"><input type="radio" name="type" value="BTech" onChange={(e) => setHodDetails({ ...hodDetails, type: e.target.value })} required /> BTech</label>
                <label className="mr-4"><input type="radio" name="type" value="MBA" onChange={(e) => setHodDetails({ ...hodDetails, type: e.target.value })} required /> MBA</label>
                <label><input type="radio" name="type" value="BEd" onChange={(e) => setHodDetails({ ...hodDetails, type: e.target.value })} required /> BEd</label>
              </div>
              <select className="border p-2 w-full mb-2" value={hodDetails.branch} onChange={(e) => setHodDetails({ ...hodDetails, branch: e.target.value })} required>
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="EC">EC</option>
                <option value="EX">EX</option>
                <option value="ME">ME</option>
                <option value="CE">CE</option>
              </select>
              <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Submit</button>
            </form>
          </div>
        )}
        {showStudentForm && (
          <div className="bg-gray-100 p-6 rounded shadow-md w-96 relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={() => setShowStudentForm(false)}>
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">Add Student</h2>
            <form onSubmit={handleStudentFormSubmit}>
              <input className="border p-2 w-full mb-2" type="text" placeholder="Enrollment Number" value={studentDetails.enrollment} onChange={(e) => setStudentDetails({ ...studentDetails, enrollment: e.target.value })} required />
              <input className="border p-2 w-full mb-2" type="text" placeholder="Year" value={studentDetails.year} onChange={(e) => setStudentDetails({ ...studentDetails, year: e.target.value })} required />
              <input className="border p-2 w-full mb-2" type="text" placeholder="Branch" value={studentDetails.branch} onChange={(e) => setStudentDetails({ ...studentDetails, branch: e.target.value })} required />
              <input className="border p-2 w-full mb-2" type="text" placeholder="Course" value={studentDetails.course} onChange={(e) => setStudentDetails({ ...studentDetails, course: e.target.value })} required />
              <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
