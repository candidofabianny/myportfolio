
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { zoomIn } from '../utils/motion';

const Experience = () => {
  return (
    <div className='flex flex-col xs:flex-row py-10'>
      <motion.div variants={zoomIn(0,1)}>
        <ul className={`${styles.sectionHeadText} hidden md:block sm:pl-16 pl-[2rem]`}>
          <li>01</li>
          <li>02</li>
        </ul> 
        </motion.div>
        <ul className={`${styles.sectionSubText} flex flex-col gap-8 sm:pl-16 pl-[2rem]`}>
       <li>Divercity Cyber Council
       <p>Remote, Atlanta</p></li>
       <li>Paula Amaral School
       <p>Curitiba, Brazil</p></li>
        </ul>
        <ul className={`${styles.sectionSubText} flex flex-col gap-8 sm:pl-16 pl-[2rem]`}>
       <li>February 2023 – February 2024
       <p className='text-[30px] xmd:text-[18px] hover:xmd:text-[70px] text-cherry xmd:text-white hover:text-cherry'>Web developer</p></li>
       <li>March 2022 – August 2022
       <p className='text-[30px] xmd:text-[18px] hover:text-yellow xmd:text-white text-yellow  hover:xmd:text-[70px]'>Computer teacher for elementary and high school</p>
       <p className='hover:text-yellow text-white'>social media manager and content creator.</p></li>
        </ul>
     </div>
  );
};

export default SectionWrapper(Experience, 'work');
