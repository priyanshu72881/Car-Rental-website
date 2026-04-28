import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'

const Cars = () => {

  const [input, setInput] = useState("")

  // Filter logic
  const filteredCars = dummyCarData.filter((car) =>
    `${car.brand} ${car.model} ${car.category} ${car.fuel_type}`
      .toLowerCase()
      .includes(input.toLowerCase())
  )

  return (
    <div>

      {/* Top Section */}
      <div className='flex flex-col items-center py-20 bg-gray-100 px-4'>

        <Title 
          title="Available Cars" 
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />

        {/* Search Box */}
        <div className='flex items-center bg-white px-4 mt-6 max-w-xl w-full h-12 rounded-full shadow'>

          <img src={assets.search_icon} alt="search" className='w-4 h-4 mr-2' />

          <input
            onChange={(e)=> setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Search by brand, model, category...'
            className='w-full h-full outline-none text-gray-600'
          />

          <img src={assets.filter_icon} alt="filter" className='w-4 h-4 ml-2' />

        </div>

      </div>

      {/* Cars Section */}
      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>

        <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>
          Showing {filteredCars.length} cars
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>

          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <CarCard key={car._id} car={car}/>
            ))
          ) : (
            <p className='text-gray-500 col-span-full text-center mt-10'>
              No cars found
            </p>
          )}

        </div>

      </div>

    </div>
  )
}

export default Cars