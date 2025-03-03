import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopProducts from '../components/TopProducts'
import Banner from '../components/Banner'
import Aurawellness from '../components/howWeWork'
// import whyFrequency from '../components/whyFrequencyHealing'
import Testmonial from '../components/testimonials'
import ContactInfo from '../components/contactInfo'
import ProductPage from '../components/products'
const Home = () => {
  return (
    <div>
      <Header />
      {/* <whyFrequency /> */}
      <SpecialityMenu />
      <ProductPage  />
      {/* <TopProducts /> */}
      <Aurawellness /> 
      <Testmonial />
     
      <ContactInfo />  {/* Add ContactInfo component here */}
      {/* <Banner /> */}
    </div>
  )
}

export default Home