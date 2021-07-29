import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Cover from './Components/Cover/Cover'
import Features from './Components/Features/Features'
import ImageSlide from './Components/ImageSlide/ImageSlide'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallary'
import Chart from './Components/Chart/Chart'
import Footer from './Components/Footer/Footer'



export default function App() {
  return (
    <>
      <Navigation />
      <Cover/>
      <Features/>
      <ImageSlide/>
      <About/>
      <Gallery/>
      <Chart/>
      <Footer/>
    </>
  )
}
