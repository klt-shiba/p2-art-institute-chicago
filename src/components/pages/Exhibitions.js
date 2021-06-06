import React from 'react';
import ExhibitionContainer from '../ExhibitionContainer';
import Section from '../Section'
import { Container } from 'reactstrap';

const Exhibitions = () => {
  return (
    <Section backgroundColour={"black"}>
      <Container fluid={true}>
        <ExhibitionContainer/>
      </Container>
    </Section>
  );
};

export default Exhibitions;
