import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {

  const currency = import.meta.env.VITE_CURRENCY || "₹"

  const [image, setImage] = useState(null)

  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    pricePerDay: '',
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: '',
    location: '',
    description: '',
  })

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (!image) {
      alert("Please upload car image")
      return
    }

    console.log(car, image)
  }

  return (
    <div className="px-4 py-10 md:px-10 flex-1">

      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
      />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-600 text-sm mt-6 max-w-xl"
      >

        {/* Image Upload */}
        <div className="flex items-center gap-3">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt="upload"
              className="h-14 w-14 object-cover rounded cursor-pointer border border-gray-300"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-gray-500">Upload car image</p>
        </div>

        {/* Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label>Brand</label>
            <input
              type="text"
              placeholder="BMW, Audi"
              required
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.brand}
              onChange={(e)=>setCar({...car, brand:e.target.value})}
            />
          </div>

          <div>
            <label>Model</label>
            <input
              type="text"
              placeholder="X5, A6"
              required
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.model}
              onChange={(e)=>setCar({...car, model:e.target.value})}
            />
          </div>

        </div>

        {/* Year, Price, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div>
            <label>Year</label>
            <input
              type="number"
              placeholder="2024"
              required
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.year}
              onChange={(e)=>setCar({...car, year:e.target.value})}
            />
          </div>

          <div>
            <label>Daily Price ({currency})</label>
            <input
              type="number"
              placeholder="100"
              required
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.pricePerDay}
              onChange={(e)=>setCar({...car, pricePerDay:e.target.value})}
            />
          </div>

          <div>
            <label>Category</label>
            <select
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.category}
              onChange={(e)=>setCar({...car, category:e.target.value})}
            >
              <option value="">Select</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>

        </div>

        {/* Transmission, Fuel, Seating */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div>
            <label>Transmission</label>
            <select
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.transmission}
              onChange={(e)=>setCar({...car, transmission:e.target.value})}
            >
              <option value="">Select</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <div>
            <label>Fuel Type</label>
            <select
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.fuel_type}
              onChange={(e)=>setCar({...car, fuel_type:e.target.value})}
            >
              <option value="">Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div>
            <label>Seats</label>
            <input
              type="number"
              placeholder="4"
              required
              className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
              value={car.seating_capacity}
              onChange={(e)=>setCar({...car, seating_capacity:e.target.value})}
            />
          </div>

        </div>

        {/* Location */}
        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="Delhi"
            required
            className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
            value={car.location}
            onChange={(e)=>setCar({...car, location:e.target.value})}
          />
        </div>

        {/* Description */}
        <div>
          <label>Description</label>
          <textarea
            rows={4}
            required
            className="px-3 py-2 mt-1 border border-gray-300 rounded-md outline-none"
            value={car.description}
            onChange={(e)=>setCar({...car, description:e.target.value})}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2.5 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium w-max cursor-pointer"
        >
          <img src={assets.tick_icon} alt="tick" className="w-4"/>
          List Your Car
        </button>

      </form>
    </div>
  )
}

export default AddCar