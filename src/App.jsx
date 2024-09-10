import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import PaymentSuccess from "./Pages/payment/PaymentSuccess";
import PaymentFailed from "./Pages/payment/PaymentFailed";
import GetTicket from "./Pages/GetTicket";
import Profile from "./Pages/Profile";
import SuccessEmail from "./Pages/SuccessEmail";
import AuthDetailsContext from "./context/Authentication/AuthDetailsContext";
import NotAuthenticated from "./Components/ProtectedRoutes/NotAuthenticated";
import Authenticated from "./Components/ProtectedRoutes/Authenticated";
import ForgotPass from "./Components/ForgotPass";
import RoleAuthentication from "./Components/ProtectedRoutes/RoleAuthentication";
import AdminAuthentication from "./Components/ProtectedRoutes/AdminAuthentication";

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
          <Route path="/" element={<AdminAuthentication><Home /></AdminAuthentication>} />
          <Route path="/events-page/:category" element={<AdminAuthentication><EventsPage /></AdminAuthentication>} />
          <Route
            path="/login"
            element={
              <Authenticated>
                <Login />
              </Authenticated>
            }
          />
          <Route
            path="/forgot-pass"
            element={
              <Authenticated>
                <ForgotPass />
              </Authenticated>
            }
          />
          <Route path="/event-details/:id" element={<AdminAuthentication><EventDetails /></AdminAuthentication>} />
          <Route path="/event-details/:id/get-ticket" element={<AdminAuthentication><GetTicket /></AdminAuthentication>} />
          <Route path="/contact" element={<AdminAuthentication><ContactUs /></AdminAuthentication>} />
          <Route path="/payment-success" element={<AdminAuthentication><PaymentSuccess /></AdminAuthentication>} />
          <Route path="/payment-failed" element={<AdminAuthentication><PaymentFailed /></AdminAuthentication>} />
          <Route path="/success-email" element={<AdminAuthentication><SuccessEmail /></AdminAuthentication>} />
          <Route path="/profile" element={<AdminAuthentication><Profile /></AdminAuthentication>} />
          <Route
            path="/edit-profile"
            element={
              <NotAuthenticated>
                <AdminAuthentication>
                <EditProfile />
                </AdminAuthentication>
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
          <Route
            path="/admin"
            element={
              <RoleAuthentication>
                <DashboardAdmin />
              </RoleAuthentication>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin/event/:id"
            element={
              <RoleAuthentication>
                <CreateEvent />
              </RoleAuthentication>
            }
          />
        </Routes>
        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </AuthDetailsContext>
    </>
  );
}

export default App;
