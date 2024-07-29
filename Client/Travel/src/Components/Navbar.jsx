import React from 'react'
import stayimg from "../assets/Images/Stay.png"
import "./Navbar.css"
import carimg from "../assets/Images/car.png"
import taxiimg from "../assets/Images/Taxi.png"
import flightimg from "../assets/Images/flight.png"
import flighthotelimg from "../assets/Images/flightsandhotels.png"
import attractionimg from "../assets/Images/Attraction.png"


const Navbar = () => {



    return (
        <>
            <div className="navbar bg-[#001233] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-blue-950 text-white">
                            <li><a>Stays</a></li>
                            <li><a>Flights</a></li>
                            <li><a>Flight + Hotel</a></li>
                            <li><a>Car rentals</a></li>
                            <li><a>Attractions</a></li>
                            <li><a>Airport Taxis</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl md:ml-44 ml-1">GetawayGuide.com</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                </div>
                <div className="navbar-end">
                    <button className="bg-white p-2 rounded-md mr-5 text-[1.1rem] md:block hidden text-blue-700 font-bold cursor-pointer hover:bg-slate-200 px-5">Resigter</button>
                    <button className="bg-white p-2 rounded-md mr-5 text-[1.1rem] md:block hidden text-blue-700 font-bold cursor-pointer hover:bg-slate-200 px-5">Login</button>
                </div>

            </div>
            <div className=" bg-[#001233] text-white p-3 pl-56 pt-10 pb-5 gap-5 md:flex hidden">
                <div className="flex stay hover:bg-blue-950 rounded-full">
                    <img src={stayimg} alt="" />
                    <button className=" ml-1 rounded-md mr-5 text-[1rem] md:block hidden text-white font-bold cursor-pointer ">Stays</button>
                </div>
                <div className="flex stay hover:bg-blue-950 rounded-full">
                    <img src={flightimg} alt="" />
                    <button className=" ml-1 rounded-md mr-5 text-[1rem] md:block hidden text-white font-bold cursor-pointer">Flights</button>
                </div>
                <div className="flex stay hover:bg-blue-950 rounded-full">
                    <img src={flighthotelimg} alt="" />
                    <button className=" ml-1 rounded-md mr-5 text-[1rem] md:block hidden text-white font-bold cursor-pointer">Flight + Hotel</button>
                </div>
                <div className="flex stay hover:bg-blue-950 rounded-full">
                    <img src={carimg} alt="" />
                    <button className=" ml-1 rounded-md mr-5 text-[1rem] md:block hidden text-white font-bold cursor-pointer">Car rentals</button>
                </div>
                <div className="flex stay hover:bg-blue-950 rounded-full">
                    <img src={attractionimg} alt="" />
                    <button className=" ml-1 rounded-md mr-5 text-[1rem] md:block hidden text-white font-bold cursor-pointer">Attractions</button>
                </div>
                <div className="flex stay hover:bg-blue-950 rounded-full">
                    <img src={taxiimg} alt="" />
                    <button className=" ml-1 rounded-md mr-5 text-[1rem] md:block hidden text-white font-bold cursor-pointer">Airport Taxis</button>
                </div>

            </div>


        </>
    )
}

export default Navbar