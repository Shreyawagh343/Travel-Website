import React from 'react'
import { motion } from 'framer-motion'

const Feature = () => {
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
                    className='md:text-2xl text-[1.2rem] font-bold md:ml-20 ml-9'>Your account, your travel
                </motion.h1>
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
                
                
                
                className="card rounded-box grid h-32 flex-grow place-items md:ml-20 ml-5 mr-20 md:mt-10 mt-6 mb-20">
                    <div className="card bg-base-100 image-full md:w-[90vw] w-[90vw] h-40 shadow-xl">
                        <figure>
                            <img
                                src="https://savannaintl.com/wp-content/uploads/2020/12/travel-world-1.jpg"
                                alt="Shoes" className='w-full' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">All your trip details in one place
                            </h2>
                            <p>Sign in to book faster and manage your trip with ease
                            </p>
                            <div className="flex">
                            <button className='bg-blue-600 w-20 rounded-md'><a href="">Sign in</a></button>
                            <button className='bg-blue-600 w-20 rounded-md ml-6 h-10'><a href="">Resigter</a></button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Feature