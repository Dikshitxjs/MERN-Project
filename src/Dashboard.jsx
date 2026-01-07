import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/LoginPage");
      return;
    }

    axios.get("http://localhost:3001/profile", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setMessage(res.data.message))
    .catch(() => {
      setMessage("Session expired. Please login again.");
      localStorage.removeItem("token");
      navigate("/LoginPage");
    });
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/LoginPage");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0C0F2D] text-white">
      <h1 className="text-3xl mb-4">{message}</h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
