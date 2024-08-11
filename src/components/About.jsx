import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
    return (
    <div className='flex flex-col justify-center w-full h-full mb-12'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducing</p>
        <h2 className={styles.sectionHeadText}>My Portfolio.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-beige text-[18px] max-w-3xl leading-[30px]">
        Welcome! I am a dedicated software engineer, passionate about design with a background as a computing technician from the Federal 
        Institute of Paraná and currently pursuing a degree in Computer Science at the University of Buenos Aires. My diverse educational 
        and professional journey equips me with a unique blend and problem-solving skills.
      </motion.p>
      </div>
    );
   
};

export default SectionWrapper(About, 'about');