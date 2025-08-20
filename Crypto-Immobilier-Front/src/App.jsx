
import NavBar from './components/Header/NavBar';
import Hero from './components/Hero';
import { HeroProvider } from './context/HeroContext';

function App() {
  return (
    <HeroProvider>
      <div className="relative">
        <NavBar />
        <Hero />
      </div>
    </HeroProvider>
  )
}

export default App
