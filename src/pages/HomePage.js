import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Column, Container, Input, Label, Row, Submit } from '../GlobalStyle';

const HomePage = () => {
  const [city, setCity] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city) {
      history.push({ pathname: `${city.toLowerCase()}` });
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Column>
          <h1>Search Restaurants by City</h1>
          <form onSubmit={handleSubmit}>
            <Label
              htmlFor="city"
              aria-required="true"
              block
              bold
              marginBottomLarge
            >
              City*
            </Label>
            <Input
              id="city"
              name="city"
              placeholder="Enter a city"
              type="text"
              value={city}
              onChange={handleChange}
              marginBottomLarge
            />
            <Submit name="submit" type="Submit" value="Submit" block />
          </form>
        </Column>
      </Row>
    </Container>
  );
};

export default HomePage;
