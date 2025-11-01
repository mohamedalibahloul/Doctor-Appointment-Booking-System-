import React from "react";
import "./index.css"; // Make sure this is the file with Tailwind CSS imports
import { Route, Routes } from "react-router-dom";
import { MyAppointments } from "./pages/MyAppointments";
import { Home } from "./pages/Home";
import { Doctors } from "./pages/Doctors";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { Contact } from "./pages/Contact";
import { Myprofile } from "./pages/Myprofile";
import { Appointment } from "./pages/Appointment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Doctors/:speciality" element={<Doctors />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/My-profile" element={<Myprofile />} />
        <Route path="/My-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
