import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// img
import work1 from '../img/work1.png';
import work2 from '../img/work2.png';
// Animation
import { motion } from 'framer-motion';
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  line,
} from '../animation';

const Work = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>

        <motion.h1 variants={fade} style={{ color: 'white' }}>
          Developer Work History
        </motion.h1>

        <Segment>
          <motion.h2 variants={fade} style={{ color: 'rgb(13, 213, 252)' }}>
            Front End Web Developer
          </motion.h2>
          <motion.h3 variants={fade} style={{ color: 'white' }}>
            H2 Marketing Consultants
          </motion.h3>
          <motion.div className='line' variants={line}></motion.div>
          <Link to='/work/work-1'>
            <motion.img
              variants={photoAnim}
              src={work1}
              alt='H2 Marketing Consultants'
            />
          </Link>
        </Segment>

        <Segment>
          <motion.h2 variants={fade} style={{ color: 'rgb(13, 213, 252)' }}>
            Unity VR/AR Developer
          </motion.h2>
          <motion.h3 variants={fade} style={{ color: 'white' }}>
            Cinnamon Roll Studios
          </motion.h3>
          <motion.div className='line' variants={line}></motion.div>
          <Link to='/work/work-2'>
            <motion.img
              variants={photoAnim}
              src={work2}
              alt='H2 Marketing Consultants'
            />
          </Link>
        </Segment>
      </motion.div>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Segment = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

// Frame Animation Effect
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #000000;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8e8e;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Work;
