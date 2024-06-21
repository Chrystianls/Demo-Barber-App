import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BarberDashboard from "./Pages/BarberDashboard";
import BarberScheduleDashboard from "./Pages/BarberScheduleDashboard";
import BarberSettings from "./Pages/BarberSettings";
import UploadPicture from "./Pages/UploadPicture";
import PreferenceAvailability from "./Pages/PreferenceAvailability";
import AddPaymentMethod from "./Pages/AddPaymentMethod";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CustomerDashboard from "./Pages/CustomerDashboard";

function App() {
  return (
    <div className="font-SF-pro">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/personal-info" element={<Register />} />
          <Route path="/register/upload-picture" element={<UploadPicture />} />
          <Route
            path="/register/preference-availability"
            element={<PreferenceAvailability />}
          />
          <Route
            path="/register/add-payment-method"
            element={<AddPaymentMethod />}
          />
          <Route
            path="/register/terms-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/customer-dashboard"
            element={<CustomerDashboard />}
          />
          <Route path="/barber-dashboard" element={<BarberDashboard />} />
          <Route
            path="/barber-schedule-dashboard"
            element={<BarberScheduleDashboard />}
          />
          <Route path="/barber-settings" element={<BarberSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
