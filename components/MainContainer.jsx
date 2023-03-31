import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const MainContainer = ({children}) => {
  return (
    <>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default MainContainer