import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { click, clickpurple, gitpurple } from '../assets';


const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Case Studies</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Take a look at these projects to see my skills in action. Each one includes a brief description, 
          with links to the code and live demos. 
          I built them using JavaScript, TypeScript, TailwindCSS, and HTML.
        </motion.p>
      </div>

  <div className="container">
  <div className="gallery-wrap">
    <div className="item item-1">
      <div className="caption">
        <h1 className={`${styles.cardTitle} text-white`}>TRANSPARESER</h1>
        <p className='text-white text-[78%] xmd:text-[100%]'>Developed and designed for psychologist Carol Saibert specialized in authenticity development. The site features a authentic interface designed with over six pages to enable easy navigation through the services.</p>
        <a href='https://transpareser.com'>
        <img src={click} 
            alt="link"
            className="h-[55px] w-[55px] p-2"></img></a>
      </div>
    </div>
    <div className="item bg-[url('src/assets/projects/eraumavez.png')]">
      <div className="caption">
        <h1 className={`${styles.cardTitle} text-purple`}>ERA UMA VEZ...</h1>
        <p className='hidden md:block text-[#5e396b]'>An innovative project that I helped develop, for teachers supported by the government of my hometown to promote reading and storytelling among young children, using technology as a mean to support early childhood education. The platform offers a colorful experience, allowing users to watch, read, or listen to a variety of selected stories.</p>
        <p className='md:hidden text-[#5e396b] text-[80%] xmd:text-[100%]'>An innovative project that I helped develop, for teachers supported by the government of my hometown to promote reading and storytelling among young children. The platform offers a colorful experience, allowing users to watch, read, or listen to selected stories.</p>
        <div className='flex'>
        <a href='https://projetoeraumavez.vercel.app/'>
        <img src={clickpurple} 
            alt="link"
            className="h-[55px] w-[55px] p-2"></img></a>
            <a href='https://github.com/candidofabianny/eraumavez'>
        <img src={gitpurple} 
            alt="github link"
            className="h-[55px] w-[55px] p-2"></img></a>
            </div>
      </div>
    </div>
    <div className="item bg-[url('src/assets/projects/spotlight.png')]">
      <div className="caption">
        <h1 className={`${styles.cardTitle} text-yellow`}>SPOTLIGHT</h1>
        <p className='hidden md:block text-white'>developed during an internship, aimed to empower underserved communities by connecting Atlanta residents with social organizations. Although the project made significant progress, the decision was made to focus on the Android app, leading to the discontinuation of the web version's.</p>
        <p className='md:hidden text-[80%] text-black'>developed during an internship, aimed to empower communities by connecting Atlanta residents with social organizations. <p className='text-white text-[9%] pt-6'>Although the project made significant progress, the decision was made to focus on the Android app, discontinuating the web version's.</p></p>
        <a href='https://spotlight-beta.vercel.app/'>
        <img src={click} 
            alt="link"
            className="h-[55px] w-[55px] p-2"></img></a>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
