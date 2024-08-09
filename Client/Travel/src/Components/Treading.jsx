import React from 'react'
import { motion } from "framer-motion"

const Treading = () => {
    return (
        <>
            <div className="mt-16 md:block hidden">
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
                 className='md:text-2xl text-[1.2rem] font-bold md:ml-20 ml-9'>Trending destinations</motion.h1>
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
               className='text-1xl font-bold md:ml-20 ml-9 md:w-full w-[80vw]'

                >Most popular choices for travellers from India</motion.p>
                <motion.div 
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.7,
                y: { type: 'spring', stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "ease-in",
                duration: 1
                }}              
                className="flex w-full flex-col lg:flex-row">
                    <div className="card bg-white border border-3 rounded-box grid md:h-80 h-52 flex-grow md:ml-40 ml-5 mt-10 md:w-[50%] w-[90vw]">
                        <img src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" alt="" className='w-full h-80 rounded-md' />
                    </div>
                    <div className="card bg-white border border-3 rounded-box grid md:h-80 h-52 flex-grow md:ml-10 ml-5 mt-10 md:w-[50%] w-[90vw] mb-6 mr-40">
                    <img src="https://media.timeout.com/images/105242415/750/422/image.jpg" alt="" className='w-full h-80 rounded-md' />
                    </div>
                </motion.div>
                <motion.div
                
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.7,
                y: { type: 'spring', stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "ease-in",
                duration: 1
                }} 
                
                
                
                className="flex w-full flex-col lg:flex-row ">
                    <div className="card bg-white border border-3 rounded-box grid md:h-56 h-52 flex-grow md:ml-40 ml-5 mt-5 md:w-[30%] w-[90vw] mb-6 mr-10">
                    <img src="https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg" alt="" className='w-full h-56 rounded-md' />
                    </div>
                    <div className="card bg-white border border-3 rounded-box grid md:h-56 h-52 flex-grow md:ml-1 ml-5 mt-5 md:w-[30%] w-[90vw] mb-6 mr-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9l2M6CCS1KvRTKGGPmzXQIrcrlGUJyQ97-w&s" alt="" className='w-full h-56 rounded-md' />
                    </div>
                    <div className="card bg-white border border-3 rounded-box grid md:h-56 h-52 flex-grow md:ml-1 ml-5 mt-5 md:w-[30%] w-[90vw] mb-6 mr-40">
                    <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg" alt="" className='w-full h-56 rounded-md' />
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Treading