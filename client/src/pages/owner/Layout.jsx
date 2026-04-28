import React from 'react'
import NavbarOwner from '../../components/owner/NavbarOwner'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>

      {/* Top Navbar */}
      <NavbarOwner />

      {/* Main Layout */}
      <div className='flex flex-1 overflow-hidden'>

        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className='flex-1 overflow-y-auto bg-gray-50'>
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default Layout