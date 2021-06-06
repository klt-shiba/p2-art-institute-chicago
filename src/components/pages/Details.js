import React from 'react';
import DetailContainer from '../DetailContainer';
import Section from '../Section'
import { Container } from 'reactstrap';

const Details = () => {
  return (
    <Section backgroundColour={"black"}>
      <Container fluid={true}>
        <DetailContainer/>
      </Container>
    </Section>
  );
};

export default Details;
