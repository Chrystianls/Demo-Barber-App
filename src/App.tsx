import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BarberDashboard from "./Pages/BarberDashboard";

function App() {
  return (
    <div className="font-SF-pro">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/barber-dashboard" element={<BarberDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
