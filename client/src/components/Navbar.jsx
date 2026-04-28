import React from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {

  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const isHome = location.pathname === "/"

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b relative
      ${isHome ? "bg-gray-100" : "bg-white"} border-gray-300`}
    >

      {/* Logo */}
      <Link to="/" onClick={() => setOpen(false)}>
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white z-40 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:translate-x-0
        flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 sm:p-0`}
      >

        {/* Links */}
        {menuLinks.map((link, index) => {
          const isActive = location.pathname === link.path

          return (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`${isActive ? "text-blue-600 font-medium" : "hover:text-blue-600"}`}
            >
              {link.name}
            </Link>
          )
        })}

        {/* Search */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-w-56">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Search cars..."
          />
          <img src={assets.search_icon} alt="search" className="w-4" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

          <button
            onClick={() => {
              navigate('/owner')
              setOpen(false)
            }}
            className="hover:text-blue-600"
          >
            Dashboard
          </button>

          <button
            onClick={() => {
              setShowLogin(true)
              setOpen(false)
            }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Login
          </button>

        </div>

      </div>

      {/* Hamburger */}
      <button
        className="sm:hidden z-50"
        onClick={() => setOpen(!open)}
      >
        <img 
          src={open ? assets.close_icon : assets.menu_icon} 
          alt="menu" 
          className="h-6 w-6"
        />
      </button>

    </div>
  )
}

export default Navbar