import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Flights from "./Pages/Home/Flights"
import FlightAndHotel from "./Pages/Home/FlightAndHotel"
import Resigter from "./Components/Resigter"
import Login from "./Components/Login"
import { useAuth } from "./Context/AuthProvider"

function App() {
  const[authUser,setauthUser]=useAuth()

  return (
    
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/flight" element={authUser ?<Flights/>:<Navigate to="/login"/>}/>
      <Route path="/flightandhotel" element={<FlightAndHotel/>}/>
      <Route path="/resigter" element={<Resigter/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
   
     
    </>
  )
}

export default App
