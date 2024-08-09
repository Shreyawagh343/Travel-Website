import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Flights from "./Pages/Home/Flights"

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/flight" element={<Flights/>}/>
    </Routes>
   
     
    </>
  )
}

export default App
