import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center items-start justify-between px-6 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-12 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] w-full max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">

        <div className='text-white w-full md:w-1/2'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight'>Do You Own a Luxury Car?</h2>
            
            <p className='mt-3 text-sm sm:text-base'>
              Monetize your vehicle effortlessly by listing it on CarRental.
            </p>
            
            <p className='mt-3 text-sm sm:text-base max-w-full md:max-w-[520px]'>
              We take care of insurance, driver verification and secure payments so you can earn passive income, stress-free.
            </p>

            <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-blue-600 rounded-lg text-sm mt-4 cursor-pointer'>
              List your car
            </button>

        </div>

        <img 
          src={assets.banner_car_image} 
          alt="car" 
          className='w-full md:w-1/2 mt-8 md:mt-0 object-contain max-h-[220px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[360px]'
        />

    </div>
  )
}

export default Banner