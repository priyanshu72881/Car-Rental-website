import React from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const ManageCars = () => {

  const currency = import.meta.env.VITE_CURRENCY || "₹"

  // Dummy data (future: API se aayega)
  const cars = [
    {
      _id: "1",
      brand: "BMW",
      model: "X5",
      year: 2023,
      pricePerDay: 5000,
      status: "Available",
      image: assets.car_image_1
    },
    {
      _id: "2",
      brand: "Audi",
      model: "A6",
      year: 2022,
      pricePerDay: 4000,
      status: "Booked",
      image: assets.car_image_2
    }
  ]

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>

      <Title 
        title="Manage Cars" 
        subTitle="View, edit and manage all listed cars"
      />

      <div className='mt-8 overflow-x-auto'>
        <table className='min-w-full border border-gray-300 rounded-md'>

          {/* Head */}
          <thead className='bg-gray-100 text-gray-600 text-sm'>
            <tr>
              <th className='p-3 text-left'>Car</th>
              <th className='p-3 text-left'>Year</th>
              <th className='p-3 text-left'>Price</th>
              <th className='p-3 text-left'>Status</th>
              <th className='p-3 text-left'>Action</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {cars.map((car) => (
              <tr key={car._id} className='border-t text-sm'>

                {/* Car Info */}
                <td className='p-3 flex items-center gap-3'>
                  <img 
                    src={car.image} 
                    alt="car" 
                    className='w-12 h-10 object-cover rounded'
                  />
                  <span>{car.brand} {car.model}</span>
                </td>

                <td className='p-3'>{car.year}</td>

                <td className='p-3'>
                  {currency}{car.pricePerDay}/day
                </td>

                {/* Status */}
                <td className='p-3'>
                  <span className={`px-3 py-1 rounded-full text-xs
                    ${car.status === "Available" && "bg-green-100 text-green-600"}
                    ${car.status === "Booked" && "bg-yellow-100 text-yellow-600"}
                    ${car.status === "Unavailable" && "bg-red-100 text-red-600"}
                  `}>
                    {car.status}
                  </span>
                </td>

                {/* Actions */}
                <td className='p-3 flex gap-3'>
                  <button className='text-blue-600 hover:underline'>
                    Edit
                  </button>
                  <button className='text-red-500 hover:underline'>
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default ManageCars