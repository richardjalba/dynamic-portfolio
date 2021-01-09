import { React } from 'react';
import home2 from '../img/home2.jpg';
import { Basic, Description, Hide, Image, Icon } from '../styles';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const SkillsSection = () => {
  return (
    <Skills>
      <Description>
        <h2>
          My <span>Skill</span> Stack
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img
                src='https://www.flaticon.com/svg/static/icons/svg/921/921594.svg'
                alt='html css logos'
              />
              <h3>HTML/CSS</h3>
            </Icon>
            <p>The markdown languages.</p>
          </Card>
          <Card>
            <Icon>
              <img
                src='https://www.flaticon.com/svg/static/icons/svg/919/919828.svg'
                alt='javascript logo'
              />
              <h3>JavaScript</h3>
            </Icon>
            <p>The gift that keeps on giving.</p>
          </Card>
          <Card>
            <Icon>
              <img
                src='https://www.flaticon.com/svg/static/icons/svg/919/919825.svg'
                alt='node logo'
              />
              <h3>Node</h3>
            </Icon>
            <p>The server side run-time.</p>
          </Card>
          <Card>
            <Icon>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
                alt='react logo'
              />
              <h3>React</h3>
            </Icon>
            <p>The framework that made this.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='pastry' />
      </Image>
    </Skills>
  );
};

const Skills = styled(Basic)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  align-items: center;
  h3 {
    margin-top: 1rem;
    color: lightblue;
  }
`;

export default SkillsSection;
