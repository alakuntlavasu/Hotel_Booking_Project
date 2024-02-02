import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import AddRoom from "./components/room/AddRoom"
import ExistingRooms from "./components/room/ExistingRooms"
import EditRoom from "./components/room/EditRoom"
import Home from "./components/home/Home"
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import NavBar from "./components/layout/NavBar.jsx"
import Footer from "./components/layout/Footer.jsx"
import RoomListing from "./components/room/RoomListing.jsx"
import Admin from "./components/admin/Admin.jsx"
import Checkout from "./components/booking/Checkout.jsx"
import BookingSuccess from "./components/booking/BookingSuccess.jsx"
import Bookings from "./components/booking/Bookings.jsx"
import FindBooking from "./components/booking/FindBooking.jsx"
function App() {
  

  return (
    <>
    <main>
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/edit-room/:roomId" element={<EditRoom/>}/>
          <Route path="/existing-rooms/" element={<ExistingRooms/>}/>
          <Route path="/add-room/" element={<AddRoom />}/>
          <Route path="/browse-all-rooms" element={<RoomListing />}/>
          <Route path="/book-room/:roomId" element={<Checkout/>}/>
          <Route path="/booking-success" element={<BookingSuccess/>}/>
          <Route path="/existing-bookings" element={<Bookings/>}/>
          <Route path="/find-booking" element={<FindBooking/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
      <Footer/>
    </main>
    </>
  )
}

export default App
