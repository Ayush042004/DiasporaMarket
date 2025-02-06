import React, { useState } from 'react'
import { Search,ShoppingCart,Heart,User,ChevronDown,Menu,X} from "lucide-react"
import { Link } from 'react-router-dom'

function NavBar() {
  const[language,setLanguage] = useState("en")
  return (
    <div className='min-h-screen'>
      
        <div className=' flex items-center py-1 bg-orange-600 '>
          <p className=' text-[14px] text-white .poppins-extralight pl-5'> Get flat 40% off using aadhaar card</p>
          <div className=' flex items-center justify-end text-white ml-auto mr-[200px]'>
            <ul>
              <li className='.poppins-extralight text-[13px] '>
                <Link to="/help-centre">Help Center</Link>
              </li>
            </ul>
            <select
            className="bg-gray-800 ml-7 text-white text-[12px] border border-gray-600  rounded-md focus:outline-none "
            value={language}
            onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="es">Español (Spanish)</option>
            <option value="fr">Français (French)</option>
          </select>
          </div>
        </div>

       <nav className='bg-white shadow-md'>
        <div className='container '>
          <div className='text-2xl poppins-bold-italic text-orange-600'>
         Diaspora Market
          </div>

        </div>

       </nav>



      </div>

  )
}

export default NavBar