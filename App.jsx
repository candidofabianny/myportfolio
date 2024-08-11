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
import { Loader } from '@react-three/drei';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Loader/>
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
        <div
          className="bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
