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
      {!hideNavbarRoutes.includes(location.pathname) && <NavBar />}
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/eventsPage" element={<EventsPage />} /> */}
        <Route path="/events-page/all" element={<EventsPage />} />
        <Route path="/events-page/comedy" element={<EventsPage />} />
        <Route path="/events-page/music" element={<EventsPage />} />
        <Route path="/events-page/sports" element={<EventsPage />} />
        <Route path="/events-page/theater" element={<EventsPage />} />
        <Route path="/events-page/charity" element={<EventsPage />} />
        <Route path="/events-page/virtual" element={<EventsPage />} />
        <Route path="/events-page/family" element={<EventsPage />} />
        <Route path="/events-page/workshops" element={<EventsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/event/:id" element={<CreateEvent />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
