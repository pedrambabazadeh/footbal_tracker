import React from 'react'
import './header.css'
//const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

const Header = async ({children}) => {
    return(
        <header>
            <div className="py-4 px-6 ">
                {children}
            </div>
        </header>
    )
}

export default Header