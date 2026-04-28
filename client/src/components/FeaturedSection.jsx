import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => { 

   const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 w-full max-w-7xl mx-auto'>

        <div className='w-full'>
            <Title title='Featured Vehicles' subTitle='Explore our selection of premium vehicles available for your next adventure.'/>
       </div>

       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 w-full'>
        {
            dummyCarData.slice(0,6).map((car)=> (
                <div key={car._id}>
                   <CarCard car={car}/>
                </div>
            ))
        }

       </div>

       <button onClick={()=>{
        navigate('/cars'); scrollTo(0,0)
       }}
        className='mt-8 sm:mt-10 px-5 sm:px-6 py-2.5 sm:py-3 border border-borderColor hover:bg-gray-50 rounded-lg font-medium transition-colors ease-in-out'>
        Explore all cars <img src={assets.arrow_icon} alt="arrow" className='ml-2 inline-block w-4 h-4' />
        </button>

    </div>
  )
}

export default FeaturedSection