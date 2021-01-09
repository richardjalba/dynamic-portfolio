import styled from 'styled-components';

// font-family: 'Mukta', sans-serif;
// font-family: 'Righteous', cursive;

export const Basic = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    height: 80vh;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Icon = styled.div`
  img {
    width: 100px;
    height: 50px;
  }
`;
