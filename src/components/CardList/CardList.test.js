import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
const filteredRobots = [{
    id: 1,
    name: 'Almog Langleben',
    username: 'almogbhl',
    email: 'almog@gmail.com'
  }]

it('renders without crashing', () => {
  expect(shallow(<CardList robots={filteredRobots}/>)).toMatchSnapshot();
});