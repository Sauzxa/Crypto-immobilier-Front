
import NavBar from './components/Header/NavBar';
import Hero from './components/Hero';
import Description from './components/Description';
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
        </div>
      </DescriptionProvider>
    </HeroProvider>
  )
}

export default App
