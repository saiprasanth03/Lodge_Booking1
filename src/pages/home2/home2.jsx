import React from 'react'
import Navbar2 from '../../components/navbar2/Navbar2'
import Header2 from '../../components/header2/Header2'
import './home2.css'
import Featured from '../../components/navbar/featured/Featured'
import PropertyList from '../../components/navbar/propertyList/PropertyList'
import FeaturedProperties from '../../components/navbar/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home2 = () => {
  return (
    <div className='body'>
        <div >
          <Navbar2 />
          <Header2/>
          <div className="homeContainer">
            <Featured/>
            <PropertyList/>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
          </div>
        </div>
    </div>
  )
}

export default Home2