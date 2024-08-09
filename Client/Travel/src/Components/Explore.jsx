import React from 'react'
import Slider from "react-slick";
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 270,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="md:-mt-80 -mt-56">
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
      
      
      className="details">
      <h1 className='md:text-2xl text-[1.2rem] font-bold md:ml-20 ml-9'>Explore India</h1>
      <p className='md:text-1xl text-[1.1rem] font-bold md:ml-20 ml-9 md:w-full w-[90vw]'>These popular destinations have a lot to offer</p>
      </motion.div>
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

      
      
      
      className="">
      <Slider {...settings}>
      <div>
        <img src="https://images.cnbctv18.com/wp-content/uploads/2022/05/Goa-shutterstock-1000x573.jpg" alt="" className='md:ml-20 ml-9 mt-5 w-9/12 rounded-md' />
        <h1 className='text-[1.3rem] font-bold md:ml-20 ml-9 mt-2' >Goa</h1>
        <p className='text-[0.9rem] md:ml-20 ml-9'>5,215 Properties</p>
      </div>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbvuNTs4IEMahJ8QUka1fcrc2QeaRHXz_aw&s" alt="" className='md:ml-10 ml-4 mt-5 w-9/12 rounded-md' />
        <h1 className='text-[1.3rem] font-bold md:ml-10 ml-4 mt-2' >Ooty</h1>
        <p className='text-[0.9rem] md:ml-10 ml-4'>215 Properties</p>
      </div>
      <div>
      <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg" alt="" className='md:ml-1 ml-9 mt-5 w-9/12 rounded-md' />
        <h1 className='text-[1.3rem] font-bold md:ml-1 ml-9 mt-2' >Mumbai</h1>
        <p className='text-[0.9rem] md:ml-1 ml-9'>1,655 Properties</p>
      </div>
      <div>
      <img src="https://travelgangtok.com/uploads/tours/TP-1436-6844/shimla-manali-Himachal-Pradesh-travelgangtok.jpg" alt="" className='md:-ml-7 ml-3 mt-5 w-9/12 rounded-md' />
        <h1 className='text-[1.3rem] font-bold md:-ml-7 ml-3 mt-2' >Manali</h1>
        <p className='text-[0.9rem] md:-ml-7 ml-3'>115 Properties</p>
      </div>
      <div>
      <img src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/a1/29/0b18ba81ba2d5b3e60d39c69cd16399dc63371736506b271708ad407d4ba.jpeg" alt="" className='md:-ml-16 ml-9 mt-5 w-9/12 rounded-md' />
        <h1 className='text-[1.3rem] font-bold md:-ml-16 ml-9 mt-2' >Munnar</h1>
        <p className='text-[0.9rem] md:-ml-16 ml-9'>2,215 Properties</p>
      </div>
      <div>
      <img src="https://media1.thrillophilia.com/filestore/4mfyqfhg5r8860gb37i506keef6f_River-Rafting-in-Rishikesh.jpg?w=400&dpr=2" alt="" className='md:-ml-24 ml-3 mt-5 w-9/12 rounded-md' />
        <h1 className='text-[1.3rem] font-bold md:-ml-24 ml-3 mt-2' >Rishikesh</h1>
        <p className='text-[0.9rem] md:-ml-24 ml-3'>615 Properties</p>
      </div>
    </Slider>
    </motion.div>
    </div>
    </>
  )
}

export default Explore