
import NavBar from './components/Header/NavBar';
import Hero from './components/Hero';
import Description from './components/Description';
import SellersSection from './components/SellersSection';
import ReservationForm from './components/ReservationForm';
import { HeroProvider } from './context/HeroContext';
import { DescriptionProvider } from './context/DescriptionContext';

function App() {
  return (
    <HeroProvider>
      <DescriptionProvider>
        <div className="relative">
          <NavBar />
          <Hero />
          <Description />
          <SellersSection />
          <ReservationForm />
        </div>
      </DescriptionProvider>
    </HeroProvider>
  )
}

export default App
