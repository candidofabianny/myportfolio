import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { download } from '../assets';
  
  const Banner = () => {
    return (
        <motion.div variants={textVariant()}>
          <a href="/CV.pdf" download="/CV.pdf" className={`${styles.sectionSubText} flex pl-[2rem] gap-2`}>
            my curriculum vitae
          <img src={download} 
            alt="download cv"
            className='w-[25px] h-[25px] hover:animate-bounce'></img>
          </a>
          <h2 className={`${styles.sectionHeadText} pl-[2rem]`}>
            Work Experience.
          </h2>
        </motion.div>
    );
  };
  
  export default SectionWrapper(Banner, 'banner');
  