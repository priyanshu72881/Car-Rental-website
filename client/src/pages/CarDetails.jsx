import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

const CarDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const car = dummyCarData.find((c) => c._id === id);

  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickupDate || !returnDate) return;

    console.log({
      carId: id,
      pickupDate,
      returnDate,
    });

    // future: API call
  };

  return (
    <>
      {car ? (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
          >
            <img src={assets.arrow_icon} alt="back" className="rotate-180 opacity-70 w-4" />
            Back to all cars
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2">

              <img
                src={car.image}
                alt={car.brand}
                className="w-full h-auto md:max-h-[400px] object-cover rounded-xl mb-6 shadow-md"
              />

              <div className="space-y-6">

                <div>
                  <h1 className="text-3xl font-bold">
                    {car.brand} {car.model}
                  </h1>
                  <p className="text-gray-500 text-lg">
                    {car.category} · {car.year}
                  </p>
                </div>

                <hr className="border-gray-300" />

                {/* Info */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
                    { icon: assets.fuel_icon, text: car.fuel_type },
                    { icon: assets.car_icon, text: car.transmission },
                    { icon: assets.location_icon, text: car.location },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                      <img src={icon} alt="icon" className="h-5 mb-2" />
                      <span className="text-gray-600 text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h1 className="text-xl font-medium mb-2">Description</h1>
                  <p className="text-gray-500">{car.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h1 className="text-xl font-medium mb-2">Features</h1>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["360 Camera", "Bluetooth", "Cruise Control", "Heated Seats", "Keyless Entry"].map((item) => (
                      <li key={item} className="flex items-center text-gray-500">
                        <img src={assets.check_icon} alt="check" className="h-4 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="shadow-lg h-max sticky top-20 rounded-xl p-6 space-y-6 text-gray-600"
            >

              <p className="flex justify-between text-2xl text-gray-800 font-semibold">
                {currency}{car.pricePerDay}
                <span className="text-base text-gray-400 font-normal">/day</span>
              </p>

              <hr className="border-gray-300" />

              {/* Pickup */}
              <div className="flex flex-col gap-2">
                <label>Pickup Date</label>
                <input
                  type="date"
                  min={today}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-lg"
                  required
                />
              </div>

              {/* Return */}
              <div className="flex flex-col gap-2">
                <label>Return Date</label>
                <input
                  type="date"
                  min={pickupDate || today}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-lg"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 font-medium text-white rounded-xl"
              >
                Book Now
              </button>

              <p className="text-center text-sm text-gray-500">
                No credit card required
              </p>

            </form>

          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CarDetails;