import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Testimonial = () => {

  const testimonials = [
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: assets.testimonial_image_1,
      testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
    },
    {
      name: "John Smith",
      location: "New York, USA",
      image: assets.testimonial_image_2,
      testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
    },
    {
      name: "Ava Johnson",
      location: "Sydney, Australia",
      image: assets.testimonial_image_1,
      testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
    }
  ]

  return (
    <div className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 w-full max-w-7xl mx-auto">

      <Title 
        title="What Our Customers Say" 
        subTitle="Discover why travelers choose our platform for luxury car rentals around the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        
        {testimonials.map((testimonial, index) => (
          
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >

            {/* User Info */}
            <div className="flex items-center gap-3">
              <img 
                className="w-12 h-12 rounded-full object-cover" 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <div>
                <p className="text-lg font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, i) => (
                <img 
                  key={i} 
                  src={assets.star_icon} 
                  alt="star" 
                  className="w-4 h-4"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              "{testimonial.testimonial}"
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Testimonial