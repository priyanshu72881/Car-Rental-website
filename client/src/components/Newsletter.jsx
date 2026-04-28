import React, { useState } from 'react'

const Newsletter = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) return

    console.log("Subscribed:", email)

    // future: API call
    setEmail('')
  }

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-8 lg:px-10 my-10 mb-20 w-full">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Never Miss a Deal!
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-500 pb-4 sm:pb-6 max-w-2xl">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center max-w-2xl w-full gap-3"
      >

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="border border-gray-300 outline-none w-full px-3 py-2 sm:py-3 text-gray-600 rounded-md sm:rounded-r-none sm:rounded-l-md"
          placeholder="Enter your email"
          required
        />

        <button 
          type="submit"
          disabled={!email}
          className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-white transition-all rounded-md sm:rounded-l-none
            ${email 
              ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' 
              : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          Subscribe
        </button>

      </form>

    </div>
  )
}

export default Newsletter