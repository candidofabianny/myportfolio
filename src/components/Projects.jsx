import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { click, clickpurple, github, gitpurple, logo } from '../assets';


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
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <div class="container">
  <div class="gallery-wrap">
    <div class="item item-1 object-left">
      <div class="caption">
        <h1 className={styles.cardTitle}>TRANSPARESER</h1>
        <p>This card has a frosted glass effect using the backdrop-filter property. Try hovering over it to see the effect change.</p>
        <a href='https://transpareser.com'>
        <img src={click} 
            alt="link"
            className="h-[55px] w-[55px] p-2"></img></a>
      </div>
    </div>
    <div class="item item-2">
      <div class="caption">
        <h1 className={`${styles.cardTitle} text-purple`}>ERA UMA VEZ...</h1>
        <p className='text-[#5e396b]'>This card has a frosted glass effect using the backdrop-filter property. Try hovering over it to see the effect change.</p>
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
    <div class="item item-3">
      <div class="caption">
        <h1 className={`${styles.cardTitle} xmd:text-[#ffdd33] text-black`}>SPOTLIGHT</h1>
        <p>This card has a frosted glass effect using the backdrop-filter property. Try hovering over it to see the effect change.</p>
        <a href='https://spotlight-beta.vercel.app/'>
        <img src={click} 
            alt="link"
            className="h-[55px] w-[55px] p-2"></img></a>
      </div>
    </div>
    <div class="item item-4">
      <div class="caption">
        <h1>PAULA AMARAL SCHOOL</h1>
        <p>This card has a frosted glass effect using the backdrop-filter property. Try hovering over it to see the effect change.</p>
      </div>
    </div>
  </div>
  
</div>

    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
