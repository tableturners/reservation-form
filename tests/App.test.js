import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import App from '../client/src/components/App';
import TimesDD from '../client/src/components/TimesDD'

describe('App Test Suite', () => {
  it('Should render the app on the page', () => {
    const wrap = shallow(<App/>);
    expect(wrap).toBeTruthy();
  });

  it('Displays Make Reservation text', () => {
    const wrap = shallow(<App/>);
    expect(wrap.find('h3').text()).toEqual('Make a reservation');
  }); 

  it('Renders TimesDD component upon load', () => {
    const wrap = shallow(<App/>);
    expect(wrap.containsMatchingElement(<div><TimesDD/></div>)).toBe(true);
  })

  


})

// test('should render the app component on the screen', () => {
//   let wrap = shallow(<App />);
//   expect(wrap).toBeTruthy();
// });