import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';
import profile from '../assets/personal/fabi.png';

const Hero = () => {
  return (
      <section
        className="flex w-full items-end h-full mx-auto bg-beige">
          
          <div className='flex flex-col md:flex-row md:items-end items-left md:ml-10 mt-20'>
          <motion.div variants={zoomIn(0,1)}>
            <h1 className={'text-[40px] lg:text-[60px] text-black font-lustria ml-6'}>
              Hi! I'm
            </h1>
            <h1 className="text-[60px] md:text-[70px] text-black lg:text-[110px] font-gazpachoHeavy leading-none m-6 md:mr-10 lg:mr-14 mb-20">
              Fabianny <p/> Candido.
            </h1> 
            </motion.div>
            <div className={'md:h-[60%] lg:h-[40%] md:w-[60%] lg:w-[40%]'}>
             <img
                  src={profile}
                  alt="resume"
                  className="w-full h-full lg:w-[700px] lg:h-[700px] object-cover"
                /></div>
                
             </div> 
      </section>
  );
};

export default Hero;
