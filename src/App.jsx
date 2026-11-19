
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import InternshipList from "./pages/InternshipList";
import InternshipDetails from "./pages/InternshipDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentProfile from "./pages/StudentProfile";
import MyApplications from "./pages/MyApplications";
import CompanyProfile from "./pages/CompanyProfile";
import CompanyDashboard from "./pages/CompanyDashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<InternshipList />} />
        <Route path="/internships/:id" element={<InternshipDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/applications" element={<MyApplications />} />
        <Route path="/company/profile" element={<CompanyProfile />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
