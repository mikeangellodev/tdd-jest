import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from '../components/Hello';

Enzyme.configure({ adapter: new Adapter() });

describe('Test React', () => {
  test('check the text than prop received', () => {
    const data = { title: 'Hello Jest' };
    const wrapper = mount(
      <Hello title={data.title} />
    );
    const h1 = wrapper.find('h1');

    expect(h1.text()).toBe('Hello Jest');
  });
  
});
