import './App.css';
import Destinations from './components/Destinations/Destinations';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Trips from './components/Trips/Trips';

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title="Your Journey Your Story"
        description="Choose Your Favourite Destination"
        btn="Travel Now"
      />
      <div className="container">
        <Destinations />
        <Trips />
      </div>
      <Footer />
    </>
  );
}

export default App;
