import { React } from 'react';
// Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactStyle
      style={{ background: 'rgb(40, 55, 100)' }}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Let's get in touch!</motion.h2>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href='https://www.linkedin.com/in/richardjalba/'>
              <h2>LinkedIn Page</h2>
            </a>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href='https://richardalba.com/richardalba/#/contact'>
              <h2>Official Contact Form</h2>
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  @media (max-width: 1500px) {
    font-size: 1rem;
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: #e4e9ff;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #23d997;
  a {
    margin: 2rem;
  }
`;

export default Contact;
