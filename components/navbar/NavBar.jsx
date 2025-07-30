import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaSearch, FaUser} from 'react-icons/fa'
import './navbar.css'


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
  const logo = await getLogo()
  
  return (
  <nav>
   <div className='flex justify-center items-center'>
      <div className='flex justify-start items-center text-left w-20/60'>
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height}/>
      </div>
      <div className='w-20/60'>
      <ul className='flex justify-center items-center gap-4'>
          {navBarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-20/60'>
          <div className="flex justify-end items-center">
            <div className="w-2/12 icon-button">
              <FaUser/>
            </div>
            <div className="w-2/12 icon-button">
              <FaSearch/>
            </div>
          </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar