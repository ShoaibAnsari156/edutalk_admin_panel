import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();

    // Temporary Admin Credentials
    const adminEmail = "admin";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      console.log("Admin Logged In Successfully");
      navigate("/home"); // Navigate to HomePage
    } else {
      setError("Invalid Credentials! Try Again."); // Show error message
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-blue-300">
        <h2 className="text-blue-600 text-2xl font-semibold text-center mb-6">
          Admin Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Show error if login fails */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <div className="flex items-center border rounded-lg bg-gray-100 p-2">
              <Mail className="text-gray-500" />
              <input
                type="text"
                placeholder="Username"
                className="ml-2 bg-transparent text-gray-700 outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center border rounded-lg bg-gray-100 p-2">
              <Lock className="text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                className="ml-2 bg-transparent text-gray-700 outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
