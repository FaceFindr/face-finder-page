
import './App.css';
import NavBar from './components/navBar/NavBar';
import KeyFeatures from './components/keyFeatures/KeyFeatures';
import DescriptionSection from './components/descriptionSection/DescriptionSection';
import OrigiSection from './components/originSection/OriginSection';
import HeroSection from './components/heroSection/HeroSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <DescriptionSection/>
      <KeyFeatures/>
      <OrigiSection/>
      <Footer/>
    </div>
  );
}

export default App;
