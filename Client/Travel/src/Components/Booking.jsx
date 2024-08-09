import React, { useState } from 'react'
import { motion } from 'framer-motion'
import exchange from "../assets/Images/exchange.png"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import person from "../assets/Images/person.png"




const Booking = () => {
    const [round, setround] = useState(false);
    const [one, setone] = useState(false);
    const [multi, setmulti] = useState(false);

    const selectOption = () => {
        const check = document.querySelector(".check")
        if (check.checked) {
            setround(true)
            setone(false)
            setmulti(false)
        }
        else {
            setround(false)
        }
    }
    const selectOption1 = () => {
        const check = document.querySelector(".check1")
        if (check.checked) {
            setone(true)
            setround(false)
            setmulti(false)
        }
        else {
            setone(false)
        }
    }
    const selectOption2 = () => {
        const check = document.querySelector(".check2")
        if (check.checked) {
            setmulti(true)
            setround(false)
            setone(false)
        }
        else {
            setmulti(false)
        }
    }

    const [Adultcount, setAdultcount] = useState(0)
    const [Childrencount, setChilderncount] = useState(0)
    const [roomcount, setroomcount] = useState(0)

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
            <div className="mb-32">
                <motion.h1

                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.7,
                        y: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "ease-in",
                        duration: 1
                    }}
                    className='md:text-2xl text-[1.2rem] font-bold md:ml-20 ml-9 md:mt-52 mt-28'>Compare and book flights with ease</motion.h1>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.7,
                        y: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "ease-in",
                        duration: 1
                    }}
                    className='text-1xl font-bold md:ml-20 ml-9 md:w-full w-[80vw]'>Discover your next dream destination

                </motion.p>
                <div className=''>
                    <div className="md:flex flex-row gap-5 md:ml-20 ml-10 mt-10">
                        <div className="">
                            <input type="radio" name="option" id="roundtrip" value='a' className='check h-4 w-8' onClick={selectOption} />
                            <label htmlFor="/" className='ml-2'>Group Trip</label>
                        </div>
                        <div className="check">
                            <input type="radio" name="option" id="oneway" value='b' className='check1 h-4 w-8' onClick={selectOption1} />
                            <label htmlFor="" className='ml-2'>Solo Trip</label>
                        </div>
                        <div className="check">
                            <input type="radio" name="option" id="multi" value='c' className='check2 h-4 w-8' onClick={selectOption2} />
                            <label htmlFor="" className='ml-2'>Multi City</label>
                        </div>
                    </div>
                    <div className={`${round ? "block md:flex flex-row" : "hidden"}`}>
                        <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-20 ml-5 mt-7 text-[1.1rem]">
                            <option disabled selected>Where From ?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                         <button className='bg-slate-400 w-9 h-10 ml-5 mt-9'><img src={exchange} alt="" /></button>
                        <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-5 ml-5 mt-7 text-[1.1rem]">
                            <option disabled selected>Where To ?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <div className="ml-5 mt-5 md:w-[15%] w-[80vw]">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="select date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className="dropdown dropdown-bottom ml-5 z-0 mt-7">
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
                    <div className={`${one ? "block md:flex flex-row" : "hidden"}`}>
                        <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-20 ml-5 mt-7 text-[1.1rem]">
                            <option disabled selected>From Where ?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                        <button className='bg-slate-400 w-9 h-10 ml-5 mt-9'><img src={exchange} alt="" /></button>
                        <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-5 ml-5 mt-7 text-[1.1rem]">
                            <option disabled selected>To where ?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <div className="ml-5 mt-5 md:w-[15%] w-[80vw]">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="select date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className={`flex-row ${multi ? "block" : "hidden"}`}>
                        <div className="md:flex flew-row">
                            <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-20 ml-5 mt-7 text-[1.1rem]">
                                <option disabled selected>Where From ?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>

                            <button className='bg-slate-400 w-9 h-10 ml-5 mt-9'><img src={exchange} alt="" /></button>
                            <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-5 ml-5 mt-7 text-[1.1rem]">
                                <option disabled selected>Where To ?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <div className="ml-5 mt-5">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="select date" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                            <div className="dropdown dropdown-bottom ml-5 z-0 mt-7">
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
                        <div className="md:flex flew-row">
                            <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-20 ml-5 mt-7 text-[1.1rem]">
                                <option disabled selected>Where From ?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>

                            <button className='bg-slate-400 w-9 h-10 ml-5 mt-9'><img src={exchange} alt="" /></button>
                            <select className="select select-bordered w-full max-w-xs h-[3.5rem] md:ml-5 ml-5 mt-7 text-[1.1rem]">
                                <option disabled selected>Where To ?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <div className="ml-5 mt-5">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="select date" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                            <div className="dropdown dropdown-bottom ml-5 z-0 mt-7">
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

                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking