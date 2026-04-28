import React, { useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const Dashboard = () => {

  const currency = import.meta.env.VITE_CURRENCY || "₹"
  const [data] = useState(dummyDashboardData)

  // Dashboard cards
  const DashboardCards = [
    {
      title: "Total Cars",
      value: data?.totalCars || 0,
      icon: assets.car_icon
    },
    {
      title: "Total Bookings",
      value: data?.totalBookings || 0,
      icon: assets.listIconColored
    },
    {
      title: "Revenue",
      value: `${currency}${data?.totalRevenue || 0}`,
      icon: assets.money_icon
    },
    {
      title: "Users",
      value: data?.totalUsers || 0,
      icon: assets.users_icon
    }
  ]

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>

      <Title 
        title="Admin Dashboard" 
        subTitle="Monitor platform performance including cars, bookings, revenue and recent activity"
      />

      {/* Cards */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-4xl'>
        {DashboardCards.map((card,index)=>(
          <div 
            key={index} 
            className='flex gap-3 items-center justify-between p-4 rounded-md border border-gray-300'
          >
            <div>
              <p className='text-xs text-gray-500'>{card.title}</p>
              <h1 className='text-lg font-semibold'>{card.value}</h1>
            </div>

            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-100'>
              <img src={card.icon} alt="icon" className='h-4 w-4'/>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>

        {/* Recent Bookings */}
        <div className='p-4 md:p-6 border border-gray-300 rounded-md max-w-lg w-full'>
          <h1 className='text-lg font-medium'>Recent Bookings</h1>
          <p className='text-gray-500'>Latest customer bookings</p>

          {(data?.recentBookings || []).map((booking,index)=>(
            <div key={index} className='mt-4 flex items-center justify-between'>

              <div className='flex items-center gap-2'>
                <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-100'>
                  <img src={assets.listIconColored} alt="booking" className='h-5 w-5' />
                </div>

                <div>
                  <p>{booking.car?.brand} {booking.car?.model}</p>
                  <p className='text-sm text-gray-500'>
                    {booking.createdAt?.split('T')[0]}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2 font-medium'>
                <p className='text-sm text-gray-500'>
                  {currency}{booking.price}
                </p>

                <p className='px-3 py-0.5 border border-gray-300 rounded-full text-sm'>
                  {booking.status}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Monthly Revenue */}
        <div className='p-4 md:p-6 border border-gray-300 rounded-md w-full md:max-w-xs'>
          <h1 className='text-lg font-medium'>Monthly Revenue</h1>
          <p className='text-gray-500'>Revenue for current month</p>

          <p className='text-3xl mt-6 font-semibold text-blue-600'>
            {currency}{data?.monthlyRevenue || 0}
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard