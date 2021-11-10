import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar_'

const Wrapper = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Wrapper
