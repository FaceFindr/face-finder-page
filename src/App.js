import React from 'react'
import Navbar from './components/navBar/Navbar'
import Hero from './components/heroSection/HeroSection'
import Description from './components/description/Description'
import Team from './components/team/Team'
import KeyFeatures from './components/keyFeatures/KeyFeatures'
import Context from './components/context/Context'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Context/>
      <KeyFeatures/>
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;