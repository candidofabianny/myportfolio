import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  return (
    <div className='flex flex-col justify-center w-full h-[400px]'>
      <motion.div variants={textVariant('', '', 0.5, 1)}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>    
      <div className='flex flex-col md:flex-row mb-6'>
      <div class="sliderTech-wrapper">
            <div class="sliderTech mt-8">
                <div class="sliderTech-text-b bg-[#3178c6]">TYPESCRIPT</div>
                <div class="bg-[#FFC93C]">JAVASCRIPT</div>
                <div class="bg-black">NODE.JS</div>
                <div class="bg-[#18b7ba]">TAILWIND &</div>
            </div>  
        </div>
        <div class="sliderTech-wrapper">
            <div class="sliderTech mt-8">
                <div class="sliderTech-text-a bg-[#f05033]">GIT</div>
                <div class="bg-[#61dafb]">React</div>
                <div class="bg-[#f4651a] -ml-6">HTML</div>
                <div class="-ml-6 bg-[#0096dc]">CSS</div>
            </div>
        </div>
        </div>
   </div>
  );
};


export default SectionWrapper(Tech, 'tech');
