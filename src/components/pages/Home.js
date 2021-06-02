import React from 'react';
import HomeContainer from '../HomeContainer';
import Section from '../Section'
import { Container } from 'reactstrap';




const Home = () => {
  return (
    <Section backgroundColour={"black"}>
      <Container>
        <h1>Home Page</h1>
        <HomeContainer/>
      </Container>
    </Section>
  );
};

export default Home;
