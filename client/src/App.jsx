import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Login from './components/Login'

import Footer from './components/Footer'

// Owner pages
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith('/owner')

  return (
    <>
      {/* Navbar */}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      {/* 🔥 LOGIN MODAL */}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Owner Panel */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={
          <div className="text-center py-20 text-gray-500">
            Page Not Found
          </div>
        } />
      </Routes>

      {/* Footer */}
      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App

//test deploy