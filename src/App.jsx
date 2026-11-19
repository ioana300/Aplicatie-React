
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InternshipList from "./pages/InternshipList";
import InternshipDetails from "./pages/InternshipDetails";
import MyApplications from "./pages/MyApplications";
import StudentProfile from "./pages/StudentProfile";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyProfile from "./pages/CompanyProfile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/internships" element={<InternshipList />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />

        <Route path="/applications" element={<MyApplications />} />
        <Route path="/student-profile" element={<StudentProfile />} />

        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
