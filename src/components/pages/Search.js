import React from 'react';
import SearchContainer from '../SearchContainer';
import Section from '../Section'
import { Container } from 'reactstrap';

const Search = () => {
  return (
    <Section backgroundColour={"black"}>
      <Container fluid={true}>
        <SearchContainer/>
      </Container>
    </Section>
  );
};

export default Search;
