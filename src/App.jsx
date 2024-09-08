import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import EventsPage from "./Pages/EventsPage";
import Login from "./Pages/Login";
import ContactUs from "./Pages/ContactUs";
import EditProfile from "./Pages/EditProfile";
import SignUp from "./Pages/SignUp";
import DashboardAdmin from "./Pages/DashboardAdmin";
import CreateEvent from "./Pages/CreateEvent";
import ScrollTop from "./Components/ScrollTop";
import EventDetails from "./Pages/EventDetails";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";
import BackTop from "./Components/BackTop";
import PaymentSuccess from "./Pages/payment/PaymentSuccess";
import PaymentFailed from "./Pages/payment/PaymentFailed";
import GetTicket from "./Pages/GetTicket";
import Profile from "./Pages/Profile";
import SuccessEmail from "./Pages/SuccessEmail";
import AuthDetailsContext from "./context/Authentication/AuthDetailsContext";
import { useContext } from "react";
import NotAuthenticated from "./Components/ProtectedRoutes/NotAuthenticated";
import Authenticated from "./Components/ProtectedRoutes/Authenticated";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "*", "/login", "/signup"]; // here you will add the desired route that you do not want to render navbar with
  const hideFooterRoutes = [
    "*",
    "/admin",
    "/admin/add-event",
    "/login",
    "/signup",
    "/",
  ]; // here you will add the desired route that you do not want to render footer with
  return (
    <>
      <AuthDetailsContext>
        {!hideNavbarRoutes.includes(location.pathname) && <NavBar />}
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events-page/:category" element={<EventsPage />} />
          <Route
            path="/login"
            element={
              <Authenticated>
                <Login />
              </Authenticated>
            }
          />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/event-details/:id/get-ticket" element={<GetTicket />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="/success-email" element={<SuccessEmail />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/edit-profile"
            element={
              <NotAuthenticated>
                <EditProfile />
              </NotAuthenticated>
            }
          />
          <Route
            path="/signup"
            element={
              <Authenticated>
                <SignUp />
              </Authenticated>
            }
          />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/event/:id" element={<CreateEvent />} />
        </Routes>
        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </AuthDetailsContext>
    </>
  );
}

export default App;
