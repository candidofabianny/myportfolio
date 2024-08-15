import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import Banner from './components/Banner';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <div className="bg-black bg-cover">
          <About />
        </div>
        <div className="bg-cherry">
          <Tech />
        </div>
        <Projects />
        <div className="bg-cherry bg-cover
            rounded-tl-[150px]">
            <Banner />   
        </div> 
        <div className="bg-[url('/src/assets/backgrounds/buenosaires.png')] bg-left bg-cover">
        <Experience /></div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
