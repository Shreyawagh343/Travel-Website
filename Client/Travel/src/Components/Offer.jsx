import React from 'react'
import { motion } from "framer-motion"
const Offer = () => {
    return (
        <>
            <div className="mt-44 mb-96">
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
             className='text-3xl font-bold ml-20'>Offers</motion.h1>
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
            className='text-1xl font-bold ml-20'>Promotions, deals and special offers for you</motion.p>
                <motion.div
                
            initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{
             delay: 0.7,
             y: { type: 'spring', stiffness: 60 },
             opacity: { duration: 0.2 },
             ease: "ease-in",
             duration: 1
             }} 
                
                
                
                className="flex w-full flex-col lg:flex-row">
                    <div className="card bg-white border border-spacing-5 rounded-box grid h-48 flex-grow ml-20 mt-10">
                        <h1 className='text-2xl font-bold ml-10 mt-5'>Fly away to your dream holiday</h1>
                        <p className='text-1xl ml-10 -mt-7'>Get inspired, compare and book flights with more flexibility
                        </p>
                        <button className='bg-blue-700 text-white rounded-md w-44 hover:bg-blue-300 ml-[30rem] mt-3  hover:text-black mb-3'>Search For Flights</button>
                    </div>
                    <div className="card rounded-box grid h-32 flex-grow place-items- ml-5 mr-20 mt-10">
                        <div className="card bg-base-100 image-full w-12/12 h-40 shadow-xl">
                        <figure>
                            <img
                                src="https://savannaintl.com/wp-content/uploads/2020/12/travel-world-1.jpg"
                                alt="Shoes" className='w-full' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Live the moment!</h2>
                            <p>Save 15% or more when you book and stay before 1 december 2024</p>
                            <div className="card-actions justify-end">
                                <button className='bg-blue-700 text-white rounded-md p-2 w-44 hover:bg-blue-300 -ml-44 mt-3  hover:text-black mb-3 '>Find Gateway Deals</button>
                            </div>
                        </div>
                    </div></div>
                </motion.div>

            </div>
        </>
    )
}

export default Offer