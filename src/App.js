import './App.css';
import AboutUs from './components/About/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HeroHome from './components/Hero/HeroHome';
import Navbar from './components/Navbar/Navbar';
import OurServices from './components/OurServices/OurServices';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <WhatsAppButton/>
    <HeroHome/>
    <AboutUs/>
    <OurServices/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
