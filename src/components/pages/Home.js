import React from 'react';
import HomeContainer from '../HomeContainer';
import Section from '../Section'
import { Container } from 'reactstrap';
import Input from '../Input'




const Home = () => {
  return (
    <Section backgroundColour={"black"}>
      <Container>
        <h1>Home Page</h1>
        <HomeContainer/>
        <Input hasError={true}></Input>
      </Container>
    </Section>
  );
};

export default Home;
