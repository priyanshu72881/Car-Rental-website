import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-20 text-sm text-gray-500'>

      <div className='flex flex-wrap justify-between gap-8 pb-6 border-b border-gray-300'>

        {/* Logo Section */}
        <div>
          <img src={assets.logo} alt="Brand Logo" className='h-8 md:h-9' />
          
          <p className='max-w-xs mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className='flex items-center gap-3 mt-6'>
            <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt="Facebook" /></a>
            <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="Instagram" /></a>
            <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="Twitter" /></a>
            <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="Email" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>

          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Browse Cars</Link></li>
            <li><Link to="/owner/add-car">List Your Car</Link></li>
            <li><Link to="#">About Us</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>

          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Insurance</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>

          <ul className='mt-3 flex flex-col gap-1.5'>
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 234567890</li>
            <li>info@example.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>

        <ul className='flex items-center gap-4'>
          <li><Link to="#">Privacy</Link></li>
          <li>|</li>
          <li><Link to="#">Terms</Link></li>
          <li>|</li>
          <li><Link to="#">Sitemap</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer