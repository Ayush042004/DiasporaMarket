import React from 'react'
import Herosection from "../assets/Herosection.png"
import hero2 from "../assets/hero2.png"
import top1 from "../assets/top1.png"
import {Link} from "react-router-dom"
import top2 from "../assets/top2.jpg"
import top3 from "../assets/top3.jpg"
import top4 from "../assets/top4.jpg"
import top5 from "../assets/top5.jpg"
import top6 from "../assets/top6.jpg"
import top7 from "../assets/top7.jpg"




function Home() {

    const topCategories = [
        {
            title: "Banarasi Silk sarees",
            image: top1,
        },
        {
          title: "Pashmina shawls",
          image: top2,
        },
        {
          title: "Wood Carvings",
          image: top3,
        },
        {
          title: "Madhubani Paintings",
          image: top4,
        },
        {
          title: "Gulkand",
          image: top5,
        },
        {
          title: "Poetry",
          image: top7,
        }
      
    ]
  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <div className='min-h-screen flex items-center'>
        <div className='container mx-auto px-6 py-16 lg:px-16 md:py-24'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>

            <div className='space-y-6 text-center md:text-left'>
              <h1 className='text-4xl md:text-6xl poppins-bold text-orange-800 leading-tight'>
                Traditional Indian <br /> Handicrafts & ethnics
              </h1>
              <p className='text-lg text-gray-600 max-w-md mx-auto'>
                Discover the rich heritage of India through our curated collection of Handcrafted treasures, Traditional artwork, and Ethnic design.
              </p>
              <button className='bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors text-lg font-semibold shadow-lg'>
                Explore Collection
              </button>
            </div>

            <div className='flex justify-center'>
              <img src={Herosection} alt="Handicrafts Display" className='w-full rounded-lg object-cover' />
            </div>

          </div>
        </div>
      </div>

      {/* Full-Width Hero2 Image */}
      <div className='w-full mt-5 h-auto mb-9'>
        <img src={hero2} alt='Hero Banner' className='w-full object-cover' />
      </div>

      {/*top categories section */}

      <div className='py-16 bg-gradient-to-r from-orange-50 to-orange-100 '>

        <div className='container mx-auto px-4 '>
        <h1 className='poppins-semibold text-3xl md:text-4xl text-gray-900 mb-8 pb-7'>Shop Our Top Categories </h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {topCategories.map((items,index) =>(
                <Link to="/"
                key={index}
                className=' group aspect-[4/5] relative overflow-hidden  rounded-lg shadow-md hover:shadow-xl transition-all duration-300'>
                
                <img
                src={items.image}
                alt={items.title}
                className='w-full h-full inset-0 absolute object-cover object-center bg-gradient-to-r from-orange-50 to-orange-100 group-hover:scale-125 transition-transform duration-500'>
                </img>
                <div className='absolute inset-0 flex items-end p-6'>
                  <h3 className='text-white text-xl poppins-semibold group-hover:scale-110 transition-transform duration-500'>{items.title}</h3>
                </div>

                </Link>
            ))}

        </div>
        </div>

      </div>




      
    </div>
  )
}

export default Home
