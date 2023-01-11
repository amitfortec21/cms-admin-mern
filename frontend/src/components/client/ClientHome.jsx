import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Counts from './components/Counts'
import Details from './components/Details'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function ClientHome() {
  return (
    <>
    <main id="main">
        <Header />
        <About />
        <Features />
        <Counts />
        <Details />
        <Gallery />
        <Testimonials />
        <Team />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </main>
    </>
  )
}
