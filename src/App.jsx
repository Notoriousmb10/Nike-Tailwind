import React from 'react'
import Nav from "./components/Nav"
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe, 
  SuperQuality
} from './sections/index'

const App = () => {
  return (
    <>
    <main className='relative'>
      <Nav/> 
      <section className='xl:padding-1 wide:padding-r-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProduct/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='padding bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
    </>
  )
}

export default App
