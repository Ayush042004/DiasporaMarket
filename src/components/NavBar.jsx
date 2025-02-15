import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, ChevronDown, Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/logo.svg"


const categories = [
  {
    name: 'Traditional Wear',
    subcategories: ['Banarasi Silk Sarees', 'Lehengas', 'Kurtas', 'Sherwanis'],
  },
  {
    name: 'Handicrafts',
    subcategories: ['Pottery', 'Textiles', 'Madhubani Paintings', 'Wood Carvings'],
  },
  {
    name: 'Ethnics',
    subcategories: ['Pashmina Shawls', 'Gulkand', 'Phulkari Embroidery', 'Warli Art'],
  },
];

function NavBar() {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="">
      {/* Top Bar */}
      <div className="flex items-center py-1 bg-orange-600">
        <p className="text-[14px] text-white poppins-extralight pl-5">
          Get flat 40% off using Aadhaar card
        </p>
        <div className="flex items-center justify-end text-white ml-auto mr-[200px]">
          <ul>
            <li className="poppins-extralight text-[13px]">
              <Link to="/help-centre">Help Center</Link>
            </li>
          </ul>
          <select
            className="bg-gray-800 ml-7 text-white text-[12px] border border-gray-600 rounded-md focus:outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="es">Español (Spanish)</option>
            <option value="fr">Français (French)</option>
          </select>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="relative shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start h-16">
            <img
            src={logo}
            alt="logo"
            className='h-16'>
            </img>
            <div className=" whitespace-nowrap text-2xl font-bold text-orange-600  mr-auto">
              <Link to="/">Diaspora Market</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8  ml-12">
              {/* Categories Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-orange-600 transition-colors"
                  onMouseEnter={() => setIsCategoryOpen(true)}
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <span>Categories</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {isCategoryOpen && (
                  <div
                    className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                  >
                    {categories.map((category) => (
                      <div key={category.name} className="group/item px-4 py-2 hover:bg-orange-50">
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <ChevronDown size={16} />
                        </div>
                        <div className="hidden group-hover/item:block pl-4 mt-2 space-y-1">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub}
                              to="/"
                              className="block py-1 text-sm text-gray-600 hover:text-orange-600"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/regional-specialties"
                className={({ isActive }) =>
                  isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition-colors'
                }
              >
                Regional Specialties
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition-colors'
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition-colors'
                }
              >
                About Us
              </NavLink>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md  mx-4">
              <div className="relative w-full max-w-lg">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-6 mr-4">
              <Link to="/login" className="hover:text-orange-600 transition-colors">
                Login
              </Link>
              <Link to="/signup" className="hover:text-orange-600 transition-colors">
                Signup
              </Link>
              <button className="hover:text-orange-600 transition-colors">
                <User size={24} />
              </button>
              <button className="hover:text-orange-600 transition-colors relative">
                <Heart size={24} />
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="hover:text-orange-600 transition-colors relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="px-4 py-2 space-y-4">
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition-colors'
                }
              >
                Categories
              </NavLink>
              <NavLink
                to="/regional-specialties"
                className={({ isActive }) =>
                  isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition-colors'
                }
              >
                Regional Specialties
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition-colors'
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition-colors'
                }
              >
                About Us
              </NavLink>
              <div className="flex flex-col space-y-4 py-2">
                <Link to="/login" className="hover:text-orange-600">
                  Login
                </Link>
                <Link to="/signup" className="hover:text-orange-600">
                  Signup
                </Link>
              </div>
              <div className="flex justify-between py-2">
                <button className="hover:text-orange-600">
                  <User size={24} />
                </button>
                <button className="hover:text-orange-600">
                  <Heart size={24} />
                </button>
                <button className="hover:text-orange-600">
                  <ShoppingCart size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;