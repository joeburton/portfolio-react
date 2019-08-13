import React from 'react';
import { shallow } from 'enzyme';

import Header from '../src/assets/components/Header';
import BackToTop from '../src/assets/components/BackToTop.js';

const props = {
  scrollTo: jest.fn()
};

describe('Header', () => {
  it("should render a <Header /> component and it's sub components", () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.type()).toEqual('header');
    expect(wrapper.find('#top').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('should call the prop function scrollTo when clicking the back to top link', () => {
    const wrapper = shallow(<BackToTop {...props} />);
    wrapper
      .find('a')
      .at(0)
      .simulate('click');
    expect(props.scrollTo).toHaveBeenCalled();
  });
});
