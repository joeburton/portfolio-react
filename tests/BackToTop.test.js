import React from 'react';
import { shallow } from 'enzyme';

import BackToTop from '../src/assets/components/BackToTop';

describe('BackToTop', () => {
  it('should render a <BackToTop /> component', () => {
    const wrapper = shallow(<BackToTop />);

    // test component wrapper
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.hasClass('top')).toBe(true);

    // test first child
    expect(wrapper.childAt(0).type()).toEqual('a');
    expect(wrapper.childAt(0).hasClass('goto')).toBe(true);

    // test first child html content
    expect(
      wrapper.childAt(0).containsMatchingElement(
        <a href="#root" className="goto">
          ^
        </a>
      )
    ).toEqual(true);
  });
});
