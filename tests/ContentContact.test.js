import React from 'react';
import { shallow } from 'enzyme';

import ContentContact from '../src/assets/components/ContentContact.js';
import BackToTop from '../src/assets/components/BackToTop.js';

const props = {
  scrollTo: jest.fn()
};

describe('ContentContact', () => {
  it("should render a <ContentContact /> component and it's sub components", () => {
    const wrapper = shallow(<ContentContact {...props} />);

    expect(wrapper.type()).toEqual('section');
    expect(wrapper.hasClass('contact')).toBe(true);
    expect(wrapper.find(BackToTop).length).toEqual(1);
  });

  it('should call the prop function scrollTo when clicking the back to top link', () => {
    const wrapper = shallow(<BackToTop {...props} />);
    const link = wrapper.childAt(0);
    link.simulate('click');
    expect(props.scrollTo).toHaveBeenCalled();
  });
});
