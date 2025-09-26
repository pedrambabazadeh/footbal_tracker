import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[var(--primary-dark-100)] text-[var(--primary-light-500)] mt-12'>
        <div className='max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-xl font-semibold text-[var(--primary-yellow-500)] mb-4'>Site Map</h3>
                <ul className="space-y-2">
                    <li>
                        <Link href="/" className="hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-white">About</Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:text-white">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-semibold text-[var(--primary-yellow-500)] mb-4'>Stay updated</h3>
                <p className="mb-4 text-sm">
                    Subscribe to our newsletter to get the latest updates.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 rounded-mdbg-[var(--primary-dark-300)] border border-[#333]  focus:outline-none focus-ring-2 focus:ring-[var(--primary-yellow-500)]"/>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-[var(--primary-yellow-500)] text-[var(--primary-dark-500)] font-semibold rounded-md hover:scale-105 transition">
                        Subscribe
                    </button>
                </form>
            </div>
            <div>
                <h3 className='text-xl font-semibold text-[var(--primary-yellow-500)] mb-4'>Contact Us</h3>
                <p className="mb-4 text-sm">questions@footballtracker.com</p>
                <div className="flex space-x-4 text-xl">
                    <Link href="#" className="hover:text-white"><FaFacebook /></Link>
                    <Link href="#" className="hover:text-white"><FaTiktok /></Link>
                    <Link href="#" className="hover:text-white"><FaInstagram /></Link>
                </div>
            </div>
        </div>
        <div className='border-t border-[#333]'>
                <p className="text-center text-sm py-4">
                    &copy; {new Date().getFullYear()} Football Tracker. All rights reserved.
                </p>
        </div>
    </footer>
  )
}

export default Footer