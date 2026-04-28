import React, { useState } from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {

  const user = dummyUserData
  const location = useLocation()
  const [image, setImage] = useState(null)

  const updateImage = () => {
    if (!image) return
    user.image = URL.createObjectURL(image)
    setImage(null)
  }

  return (
    <div className='min-h-screen w-16 md:w-64 bg-white border-r border-gray-300 flex flex-col items-center md:items-start pt-6'>

      {/* Profile */}
      <div className='relative group flex flex-col items-center w-full'>

        <label htmlFor="image" className='relative cursor-pointer'>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image || "https://via.placeholder.com/150"
            }
            alt="user"
            className='h-10 w-10 md:h-16 md:w-16 rounded-full object-cover'
          />

          {/* Hover Edit */}
          <div className='absolute inset-0 bg-black/30 rounded-full hidden group-hover:flex items-center justify-center'>
            <img src={assets.edit_icon} alt="edit" className='w-4 h-4' />
          </div>

          <input
            type="file"
            id='image'
            accept='image/*'
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        {/* Save Button */}
        {image && (
          <button
            onClick={updateImage}
            className='mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded'
          >
            Save
          </button>
        )}

        <p className='mt-2 text-sm font-medium hidden md:block'>
          {user?.name}
        </p>
      </div>

      {/* Menu */}
      <div className='mt-6 w-full'>

        {ownerMenuLinks.map((link, index) => {
          const isActive = location.pathname === link.path

          return (
            <NavLink
              key={index}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm transition-all
                ${isActive 
                  ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >

              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt="icon"
                className='w-5 h-5'
              />

              <span className='hidden md:block'>
                {link.name}
              </span>

            </NavLink>
          )
        })}

      </div>

    </div>
  )
}

export default Sidebar