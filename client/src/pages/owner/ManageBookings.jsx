import React from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const ManageBookings = () => {

  // Dummy data (future: API se aayega)
  const bookings = [
    {
      _id: "1",
      car: { brand: "BMW", model: "X5" },
      user: "Priyanshu Kumar",
      date: "2026-03-20",
      price: 5000,
      status: "Pending"
    },
    {
      _id: "2",
      car: { brand: "Audi", model: "A6" },
      user: "Rahul Sharma",
      date: "2026-03-18",
      price: 4000,
      status: "Confirmed"
    }
  ]

  const currency = import.meta.env.VITE_CURRENCY || "₹"

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>

      <Title 
        title="Manage Bookings" 
        subTitle="View and manage all customer bookings"
      />

      <div className='mt-8 overflow-x-auto'>
        <table className='min-w-full border border-gray-300 rounded-md'>

          {/* Table Head */}
          <thead className='bg-gray-100 text-gray-600 text-sm'>
            <tr>
              <th className='p-3 text-left'>Car</th>
              <th className='p-3 text-left'>User</th>
              <th className='p-3 text-left'>Date</th>
              <th className='p-3 text-left'>Price</th>
              <th className='p-3 text-left'>Status</th>
              <th className='p-3 text-left'>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className='border-t text-sm'>

                <td className='p-3'>
                  {booking.car.brand} {booking.car.model}
                </td>

                <td className='p-3'>{booking.user}</td>

                <td className='p-3'>{booking.date}</td>

                <td className='p-3'>
                  {currency}{booking.price}
                </td>

                <td className='p-3'>
                  <span className={`px-3 py-1 rounded-full text-xs
                    ${booking.status === "Pending" && "bg-yellow-100 text-yellow-600"}
                    ${booking.status === "Confirmed" && "bg-green-100 text-green-600"}
                    ${booking.status === "Cancelled" && "bg-red-100 text-red-600"}
                  `}>
                    {booking.status}
                  </span>
                </td>

                <td className='p-3'>
                  <button className='text-blue-600 hover:underline'>
                    View
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

export default ManageBookings