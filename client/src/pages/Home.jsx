import BestSeller from '@/components/BestSeller'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LatestBooks from '@/components/LatestBooks'
import Newsletter from '@/components/NewsLetter'
import OurPolicy from '@/components/OurPolicy'
import React from 'react'

const Home = () => {
  return (
    <div className="pt-40">
        <Hero/>
        <LatestBooks/>
        <BestSeller/>
        <OurPolicy/>
        <Newsletter/>
    </div>
  )
}

export default Home