import { React } from 'react';
import { Link } from 'react-router-dom';
import home1 from '../img/home1.jpg';
import { Basic, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1 } },
  };

  return (
    <Basic>
      <Description>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='title'
        >
          <Hide>
            <motion.h2
              variants={titleAnim}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Welcome to my
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={titleAnim}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
            >
              <span>React</span> portfolio.
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2
              variants={titleAnim}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
            >
              project.
            </motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          This project shows some of my react skills!
        </motion.p>
        <motion.button variants={fade}>
          {/* Global Styles for links are white */}
          <Link to='/contact'>Contact Me</Link>
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt='fancy pastry' />
      </Image>
      <Wave />
    </Basic>
  );
};

export default AboutSection;
