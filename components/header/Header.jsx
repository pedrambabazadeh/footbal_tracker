import React from 'react'

//const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

const Header = async ({children}) => {
    return(
        <header>
            {children}
        </header>
    )
}

export default Header