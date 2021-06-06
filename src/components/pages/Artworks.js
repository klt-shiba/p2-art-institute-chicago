import React from 'react';
import ArtworkContainer from '../ArtworkContainer';
import Section from '../Section'
import { Container } from 'reactstrap';

const Artworks = () => {
  return (
    <Section backgroundColour={"black"}>
      <Container fluid={true}>
        <ArtworkContainer/>
      </Container>
    </Section>
  );
};

export default Artworks;
