import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import EventsPage from "./Pages/EventsPage"
import Login from "./Pages/Login"
import EventDetails from "./Components/EventDetails"
import ContactUs from "./Pages/ContactUs"
import EditProfile from "./Pages/EditProfile"
import SignUp from "./Pages/SignUp"
import DashboardAdmin from "./Pages/DashboardAdmin"
import CreateEvent from "./Pages/CreateEvent"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/eventsPage" element={<EventsPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/eventDetails" element={<EventDetails/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/editProfile" element={<EditProfile/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/admin" element={<DashboardAdmin/>}/>
        <Route path="/admin/add-event" element={<CreateEvent/>}/>
      </Routes>
    </>
  )
}

export default App
