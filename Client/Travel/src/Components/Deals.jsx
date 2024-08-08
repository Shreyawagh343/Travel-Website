import React from 'react'
import { motion } from 'framer-motion'

const Deals = () => {
    return (
        <>
            <div className="mt-16">
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
                    className='md:text-3xl text-2xl font-bold md:ml-20 ml-9'>Deals for the weekend</motion.h1>
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
                    className='text-1xl font-bold md:ml-20 ml-9 md:w-full w-[80vw]'>Save on stays for 9 August - 11 August</motion.p>
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
                
                className="carousel w-full md:ml-10 ml-9 mt-10">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="card bg-base-100 w-72 shadow-xl ml-24">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoB-a-oSdA4wjGOhzB1Q3rlRdaz2tLVEoWA&s"
                                    alt="Shoes" className='h-44'/>
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-72 shadow-xl md:ml-10 ml-9">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVPulVVXlIyOgT25o_i0vuy8UsYM8QyKuUg&s"
                                    alt="Shoes" className='h-44' />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-72 shadow-xl md:ml-10 ml-9">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0qVZTybxrn5Di_a7YnmJtCCopTN1CPs5fA&s"
                                    alt="Shoes" className='h-44' />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-72 shadow-xl md:ml-10 ml-9">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVWfEsrot_4MQjinscnzr4U4V9d31XL3BBA&shttps://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" className='h-44'/>
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between mr-10">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
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
                     id="slide2" className="carousel-item relative w-full">
                        <div className="card bg-base-100 w-72 shadow-xl ml-24">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1-DUVpIgVZjPQKklwICW-qe9w66iL8pkDA&s"
                                    alt="Shoes" className='h-44'/>
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-72 shadow-xl md:ml-10 ml-9">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjVG8VAlqILUe8zsZCFxoN7B0og1MeBhIaA&s"
                                    alt="Shoes" className='h-44' />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-72 shadow-xl md:ml-10 ml-9">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJVz0ru1XKTIRFMOJgCYY7T9HeCMRt_PWPw&shttps://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" className='h-44' />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-72 shadow-xl md:ml-10 ml-9">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreXakMp_ivrdthSftXs1OyTyjBtw3bGyb3Q&s"
                                    alt="Shoes" className='h-44' />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-1xl font-semibold">
                                The Ocaen Suite Near Delhi Airport
                                </h2>
                                <p className='text-[1rem]'>New Delhi, India</p>
                                <div className="flex">
                                <div className="badge  bg-blue-800 text-white">8.3</div>
                                <p className='ml-3 text-xs mt-1'>Good.32 Review</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline bg-green-800 text-white">Gateway Deals</div>
                                </div>
                                <div className="text-[0.9rem] mt-5">
                                    <p>2 nights <span className='ml-2  text-red-800 line-through'>₹3749</span><span className='text-[1.2rem] ml-1'>₹3034</span></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between mr-5">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </>
    )
}

export default Deals