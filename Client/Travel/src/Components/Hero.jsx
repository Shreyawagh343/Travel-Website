import React, { useState } from 'react'
import "./Hero.css"
import { motion } from "framer-motion"
import person from "../assets/Images/person.png"

const Hero = () => {
  const [Adultcount, setAdultcount] = useState(0)
  const [Childrencount, setChilderncount] = useState(0)
  const [roomcount, setroomcount] = useState(0)
  const [city, setcity] = useState('')

  const handleChangeadult = () => {
    let adult = document.querySelector(".adult")
    adult.addEventListener("change", (e) => {
      setAdultcount(e.target.value);

    })
  }
  const handleChangechild = () => {
    let child = document.querySelector(".children")
    child.addEventListener("change", (e) => {
      setChilderncount(e.target.value);

    })
  }
  const handleChangeroom = () => {
    let room = document.querySelector(".room")
    room.addEventListener("change", (e) => {
      setroomcount(e.target.value);

    })
  }

 



  return (
    <>
      <div className="hero">
        <motion.h1
          initial={{ x: 170, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "ease-in",
            duration: 1
          }}

          className='text-white font-bold md:text-6xl text-4xl md:w-[40%] w-[90%] md:-ml-[35rem] -ml-[1rem] md:-mt-10 -mt-44'>A piece of paradise
          just for you</motion.h1>
        <motion.p

          initial={{ x: 170, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "ease-in",
            duration: 1
          }}


          className='text-white font-bold md:text-2xl 
          md:w-[50%] w-[70%] md:-ml-[25rem] -ml-[5rem] md:mt-32 -mt-5'>Book entire houses, villas, cabins and more</motion.p>
        <motion.button

          initial={{ x: 170, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "ease-in",
            duration: 1
          }}



          className='bg-blue-700 text-white rounded-md p-3 -ml-[60rem] mt-[15rem] hover:bg-blue-300 hover:text-black'>Discover Holidays Rentals</motion.button>
      </div>
      <motion.div

        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          x: { type: 'spring', stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "ease-in",
          duration: 1
        }}

        className="btns -mt-10 flex md:flex-row flex-col">
        <select className="select select-bordered w-full max-w-xs md:ml-80 ml-5 mt-3 text-[1.1rem]">
          <option disabled selected>Where are you going?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <div className="mt-2">
          <div className="dropdown dropdown-bottom ml-5 z-0">
            <div tabIndex={0} role="button" className="btn m-1 md:text-[1.1rem] text-[0.9rem]"><img src={person} alt="" className='w-10 h-10' />
              <p className='flex gap-3'><p>{Adultcount}</p>Adult.</p>
              <p className='flex gap-3'><p>{Childrencount}</p>Children.</p>
              <p className='flex gap-3'><p>{roomcount}</p>Room.</p></div>
            <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 bg-white">
              <li><a className='flex justify-between'>Adult <input type="number" className='w-10 adult' onClick={handleChangeadult} /></a></li>
              <li><a className='flex justify-between'>Children <input type="number" className=' children w-10' onClick={handleChangechild} /></a></li>
              <li><a className='flex justify-between'>Room <input type="number" className='room w-10' onClick={handleChangeroom} /></a></li>
            </ul>
          </div>
        </div>
        <input type="submit" placeholder='Search' className='bg-blue-700 h-12 px-5 text-white text-[1.1rem] border-none rounded-md md:ml-3 ml-5 mt-3 md:w-44 w-44' />

      </motion.div>
    </>
  )
}

export default Hero