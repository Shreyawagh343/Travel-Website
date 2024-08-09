import React from 'react'
import { motion } from 'framer-motion'

const Questions = () => {
    return (
        <>
            <div className="mb-20">
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
                    className='md:text-2xl text-[1.2rem] font-bold md:ml-20 ml-9 md:mt-0 mt-32'>Frequently asked questions</motion.h1>
                    <div className="flex">
                <div className="collapse bg-base-200 ml-20 mt-10 md:w-[80vw] w-[90vw]">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-[1rem] font-medium">How do I find the cheapest flights on Booking.com?
                    </div>
                    <div className="collapse-content">
                        <p>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors such as when you are booking and when you want to travel.
                        </p>
                    </div>
                </div>
                <div className="collapse bg-base-200 ml-8 mt-10 md:w-[80vw] w-[90vw]">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-[1rem] font-medium">Can I book one way flight tickets on Booking.com?

                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can book one way, round trip and multi city flights on our site.

                        </p>
                    </div>
                </div>
                <div className="collapse bg-base-200 ml-8 mt-10 md:w-[80vw] w-[90vw]">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-[1rem] font-medium"> How far in advance can I book a flight?

                    </div>
                    <div className="collapse-content">
                        <p>You can book a flight up to one year before your departure date.

                        </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Questions