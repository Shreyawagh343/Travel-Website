import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Flights from "./Pages/Home/Flights"
import FlightAndHotel from "./Pages/Home/FlightAndHotel"
import Resigter from "./Components/Resigter"
import Login from "./Components/Login"
import { Toaster } from "react-hot-toast" 


function App() {
  

  return (
    
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/flight" element={<Flights/>}/>
      <Route path="/flightandhotel" element={<FlightAndHotel/>}/>
      <Route path="/resigter" element={<Resigter/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Toaster/>
   
     
    </>
  )
}

export default App
