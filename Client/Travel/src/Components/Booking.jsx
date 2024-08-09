import React, { useState } from 'react'
import { motion } from 'framer-motion'


const Booking = () => {
    const [round, setround] = useState('hidden');
    const [one, setone] = useState('hidden');
    const [multi, setmulti] = useState('hidden');

    const selectOption = () => {
        const check = document.querySelectorAll(".check")
        check.forEach((input) => {
            if (input.checked) {
                setround("block")
            }
            else {
                setround("hidden")
            }
        })
    }
    return (
        <>
            <div className="">
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
                    className='md:text-3xl text-2xl font-bold md:ml-20 ml-9 mt-52'>Compare and book flights with ease</motion.h1>
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
                <div className="">
                    <div className="flex gap-5 ml-20 mt-10">
                        <div className="">
                            <input type="radio" name="option" id="roundtrip" value='a' className='check h-4 w-8' onClick={selectOption} />
                            <label htmlFor="/" className='ml-2'>Round Trip</label>
                        </div>
                        <div className="check">
                            <input type="radio" name="option" id="oneway" value='b' className='check h-4 w-8' />
                            <label htmlFor="" className='ml-2'>One Way</label>
                        </div>
                        <div className="check">
                            <input type="radio" name="option" id="multi" value='c' className='check h-4 w-8' />
                            <label htmlFor="" className='ml-2'>Multi City</label>
                        </div>
                        <div className="">
                            <div className="">
                                <select className="select select-bordered w-full max-w-xs md:ml-80 ml-5 mt-3 text-[1.1rem]">
                                    <option disabled selected>Where are you going?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking