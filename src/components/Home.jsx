import React from 'react'
import Herosection from "../assets/Herosection.png"
import hero2 from "../assets/hero2.png"
import top1 from "../assets/top1.png"
import {Link} from "react-router-dom"


function Home() {

    const topCategories = [
        {
            title: "Banarasi Silk sarees",
            image: top1,

        },
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

      <div className='py-16 bg-white'>

        <div className='container mx-auto px-4 '>
        <h1 className='poppins-semibold text-3xl md:text-4xl text-gray-900'>Shop Our Top Categories </h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {topCategories.map((items,index) =>(
                <Link to="/"
                key={index}
                className='group  overflow-hidden rounded-lg shadow-md hover:shadow-xl'>
                
                <img
                src={topCategories.image}
                alt={topCategories.title}
                className='w-full h-full '>
                </img>

                </Link>
            ))}

        </div>
        </div>

      </div>




      
    </div>
  )
}

export default Home
