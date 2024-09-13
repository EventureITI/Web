import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import Payment from "./Pages/payment/Payment";

function App() {
  const location = useLocation();

  // Add routes to be rednered without a navbar
  const hideNavbarRoutes = ["/", "*", "/login", "/signup", "/payment"];

  // Add routes to be rednered without a footer
  const hideFooterRoutes = [
    "/404",
    "/admin",
    "/admin/add-event",
    "/login",
    "/signup",
    "/",
    "/payment",
  ];

  return (
    <>
      <AuthDetailsContext>
        {!hideNavbarRoutes.includes(location.pathname) && <NavBar />}
        <ScrollTop />
        <Routes>
          <Route
            path="/"
            element={
              <AdminAuthentication>
                <Home />
              </AdminAuthentication>
            }
          />
          <Route
            path="/events-page/:category"
            element={
              <AdminAuthentication>
                <EventsPage />
              </AdminAuthentication>
            }
          />
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
          <Route
            path="/event-details/:id"
            element={
              <AdminAuthentication>
                <EventDetails />
              </AdminAuthentication>
            }
          />
          <Route
            path="/event-details/:id/get-ticket"
            element={
              <AdminAuthentication>
                <NotAuthenticated>
                  <GetTicket />
                </NotAuthenticated>
              </AdminAuthentication>
            }
          />
          <Route
            path="/payment"
            element={
              <AdminAuthentication>
                <NotAuthenticated>
                  <Payment />
                </NotAuthenticated>
              </AdminAuthentication>
            }
          />
          <Route
            path="/contact"
            element={
              <AdminAuthentication>
                <ContactUs />
              </AdminAuthentication>
            }
          />
          <Route
            path="/payment-success"
            element={
              <AdminAuthentication>
                <NotAuthenticated>
                  <PaymentSuccess />
                </NotAuthenticated>
              </AdminAuthentication>
            }
          />
          <Route
            path="/payment-failed"
            element={
              <AdminAuthentication>
                <NotAuthenticated>
                  <PaymentFailed />
                </NotAuthenticated>
              </AdminAuthentication>
            }
          />
          <Route
            path="/success-email"
            element={
              <AdminAuthentication>
                <NotAuthenticated>
                  <SuccessEmail />
                </NotAuthenticated>
              </AdminAuthentication>
            }
          />
          <Route
            path="/profile"
            element={
              <AdminAuthentication>
                <NotAuthenticated>
                  <Profile />
                </NotAuthenticated>
              </AdminAuthentication>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <AdminAuthentication>
                <NotAuthenticated>
                  <EditProfile />
                </NotAuthenticated>
              </AdminAuthentication>
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
          <Route
            path="/admin/event/:id"
            element={
              <RoleAuthentication>
                <CreateEvent />
              </RoleAuthentication>
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      </AuthDetailsContext>
    </>
  );
}

export default App;
