import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!pickupLocation || !pickupDate || !returnDate) return

    console.log({
      pickupLocation,
      pickupDate,
      returnDate
    })

    // future: navigate to cars page with filters
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100 text-center px-4 sm:px-6 md:px-8 lg:px-10'>

      <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight'>
        Luxury cars on Rent
      </h1>

      <form 
        onSubmit={handleSubmit}
        className='flex flex-col sm:flex-row flex-wrap sm:flex-nowrap items-start sm:items-center justify-between p-5 sm:p-6 md:p-8 rounded-xl md:rounded-full w-full max-w-4xl bg-white shadow-lg'
      >

        <div className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 md:ml-4'>

          {/* Location */}
          <div className='flex flex-col items-start gap-2'>
            <select 
              required 
              value={pickupLocation} 
              onChange={(e)=>setPickupLocation(e.target.value)}
              className='border border-gray-300 rounded-md px-3 py-1 text-sm'
            >
              <option value="">Pickup Location</option>
              {cityList.map((city)=> (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <p className='px-1 text-sm text-gray-500'>
              {pickupLocation ? pickupLocation : 'Please select location'}
            </p>
          </div>

          {/* Pickup Date */}
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor='pickup-date'>Pick-up Date</label>
            <input 
              type="date" 
              id="pickup-date" 
              min={today}
              value={pickupDate}
              onChange={(e)=>setPickupDate(e.target.value)}
              className='text-sm text-gray-500 border border-gray-300 rounded-md px-2 py-1'
              required
            />
          </div>

          {/* Return Date */}
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor='return-date'>Return Date</label>
            <input 
              type="date" 
              id="return-date"
              min={pickupDate || today}
              value={returnDate}
              onChange={(e)=>setReturnDate(e.target.value)}
              className='text-sm text-gray-500 border border-gray-300 rounded-md px-2 py-1'
              required
            />
          </div>

        </div>

        {/* Button */}
        <button 
          type="submit"
          disabled={!pickupLocation || !pickupDate || !returnDate}
          className={`flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto mt-4 sm:mt-0 text-white rounded-full transition
            ${(!pickupLocation || !pickupDate || !returnDate)
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
        >
          <img src={assets.search_icon} alt="search" className='brightness-200 w-4'/>
          Search
        </button>

      </form>

      <img 
        src={assets.main_car} 
        alt="car" 
        className='w-full max-w-xl h-auto max-h-[260px] sm:max-h-[300px] md:max-h-[360px] mt-6 object-contain'
      />

    </div>
  )
}

export default Hero