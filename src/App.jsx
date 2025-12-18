import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  ); 
}

export default App;
