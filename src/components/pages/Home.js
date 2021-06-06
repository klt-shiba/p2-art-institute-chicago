import React from 'react';
import HomeContainer from '../HomeContainer';
import Section from '../Section'
import { Container } from 'reactstrap';

const Home = () => {
  return (
    <Section backgroundColour={"black"}>
      <Container fluid={true}>
        <HomeContainer/>
      </Container>
    </Section>
  );
};

export default Home;
