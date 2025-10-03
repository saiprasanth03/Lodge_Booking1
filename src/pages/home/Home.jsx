import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/navbar/header/Header'
import './home.css'
import Featured from '../../components/navbar/featured/Featured'
import PropertyList from '../../components/navbar/propertyList/PropertyList'
import FeaturedProperties from '../../components/navbar/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='body'>
        <div >
          <Navbar/>
          <Header/>
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

export default Home