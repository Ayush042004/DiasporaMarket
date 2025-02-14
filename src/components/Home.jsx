import React, { useState , useRef} from 'react'
import { Heart, Star } from 'lucide-react'
import Herosection from "../assets/Herosection.png"
import hero2 from "../assets/hero2.png"
import top1 from "../assets/top1.png"
import {Link} from "react-router-dom"
import top2 from "../assets/top2.jpg"
import top3 from "../assets/top3.jpg"
import top4 from "../assets/top4.jpg"
import top5 from "../assets/top5.jpg"
import top7 from "../assets/top7.jpg"




function Home() {
  const[isDragging, setIsDragging] = useState(false);
  const[startX, setStartX] = useState(0);
  const[scrollLeft, setScrollLeft] = useState(0);
  const dealsRef = useRef(null);
  

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

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX -(dealsRef.current?.offsetLeft || 0));
      setScrollLeft(dealsRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e) => {
      if(!isDragging) return;
      e.preventDefault();
      const x = e.pageX - (dealsRef.current?.offsetLeft || 0);
      const walk = (x - startX) * 2;
      if(dealsRef.current) {
        dealsRef.current.scrollLeft = scrollLeft - walk;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    }

    const topDeals = [
      {
        id: 1,
        name: "Banarasi Silk sarees",
        desc: "Banrasi traditional sarees",
        price: 2000,
        rating: 4.7,
        reviews: 156,
        image: top1,
      },
      {
        id: 2,
        name: "Pashmina shawls",
        desc: "Pashmina traditional shawls",
        price: 3000,
        rating: 4.5,
        reviews: 156,
        image: top2,
      },
      {
        id: 3,
        name: "Wood Carvings",
        desc: "Wooden traditional carvings",
        price: 5000,
        rating: 4.9,
        reviews: 156,
        image: top3,
      },
      {
        id: 4,
        name: "Madhubani Paintings",
        desc: "Madhubani traditional paintings",
        price: 1000,
        rating: 4.8,
        reviews: 156,
        image: top4,
      },
      {
        id: 5,
        name: "Gulkand",
        desc: "Gulkand traditional sweets",
        price: 200,
        rating: 4.7,
        reviews: 156,
        image: top5,
      },
      {
        id: 6,
        name: "Poetry",
        desc: "Poetry traditional books",
        price: 500,
        rating: 4.7,
        reviews: 156,
        image: top7,
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


      {/*Deals Section*/}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Today's Best Deals For You!
          </h2>
          <div
            ref={dealsRef}
            className="flex overflow-x-auto scrollbar-hide cursor-grab space-x-6 pb-8"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {topDeals.map((deal) => (
              <div
                key={deal.id}
                className="flex-none w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ userSelect: 'none' }}
              >
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <button className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{deal.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{deal.desc}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({deal.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${deal.price.toFixed(2)}</span>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Progress Bar */}
          <div className="w-full h-1 bg-gray-200 rounded-full mt-4">
            <div
              className="h-full bg-orange-600 rounded-full transition-all duration-300"
              style={{
                width: dealsRef.current
                  ? `${(dealsRef.current.scrollLeft / (dealsRef.current.scrollWidth - dealsRef.current.clientWidth)) * 100}%`
                  : '0%'
              }}
            />
          </div>
        </div>
      </section>




      
    </div>
  )
}

export default Home
