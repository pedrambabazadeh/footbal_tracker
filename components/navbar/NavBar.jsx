import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaSearch, FaUser} from 'react-icons/fa'
import './navbar.css'
import SearchBar from '../searchBar/SearchBar'


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
async function getNavBarItems() {
  // Use absolute URL for server-side fetching
  const res = await fetch(`${baseUrl}/api/navBar`)
  
  if (!res.ok) {
      throw new Error('Failed to fetch navbar items')
  }
  
  const data = await res.json()
  return data
}

async function getLogo()
{
  const res = await fetch(`${baseUrl}/api/logo`)

  if (!res.ok)
  {
    throw new Error('logo not found')
  }

  const logo = await res.json()
  return logo

}

const NavBar = async () => {
  const navBarItems = await getNavBarItems();
  const logo = await getLogo();
  
  return (
  <nav>
   <div className='flex items-center justify-between'>
      <div className='flex justify-start items-center text-left w-20/60'>
        <div className="w-full  flex items-center">
        <Link href={logo.link} className='flex space-x-2'>
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className='logo'/>
          <span className='text-xl font-bold text-[var(--primary-yellow-500)]'>
          Football Tracker
        </span>
        </Link>
        </div>
      </div>
      <div className=' hidden md:flex space-x-6 w-40/60'>
      <ul className='flex justify-center items-center space-x-6 text-[var(--primary-light-100)]'>
          {navBarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} >{item.name}</Link>
            </li>
          ))}
        </ul>
        <SearchBar/>
        <Link href='#' className='bg-[#F8B607] text-[#171717] px-4 py-1.5 rounded-md font-semibold hover:scale-105 transition'>
          Sign In
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default NavBar