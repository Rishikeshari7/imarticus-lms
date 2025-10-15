import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Course from "./pages/Course/Course";
import {ProtectedRoute,Dashboard} from "@/components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/verify-otp" element={<Auth />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/course" element={<Course/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
