import React from 'react';
import { shallow, mount } from 'enzyme';

import BackToTop from '../src/assets/components/BackToTop';

const props = {
  scrollTo: jest.fn()
};

describe('BackToTop', () => {
  it('should render a <BackToTop /> component', () => {
    const wrapper = shallow(<BackToTop {...props} />);

    expect(wrapper.type()).toEqual('div');
    expect(wrapper.hasClass('top')).toBe(true);

    expect(wrapper.childAt(0).type()).toEqual('a');
    expect(wrapper.childAt(0).hasClass('goto')).toBe(true);

    expect(
      wrapper.childAt(0).containsMatchingElement(
        <a href="#root" className="goto">
          ^
        </a>
      )
    ).toEqual(true);
  });

  it('should call the prop function scrollTo when clicking the back to top link', () => {
    const wrapper = shallow(<BackToTop {...props} />);
    const link = wrapper.childAt(0);
    link.simulate('click');
    expect(props.scrollTo).toHaveBeenCalled();
  });
});
