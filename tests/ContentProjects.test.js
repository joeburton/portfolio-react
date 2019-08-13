import React from 'react';
import { shallow, mount } from 'enzyme';

import ContentProjects from '../src/assets/components/ContentProjects.js';
import BackToTop from '../src/assets/components/BackToTop.js';

const props = {
  scrollTo: jest.fn()
};

describe('ContentProjects', () => {
  it("should render a <ContentProjects /> component and it's sub components", () => {
    const wrapper = mount(<ContentProjects {...props} />);

    expect(wrapper.find('ContentProjects').length).toEqual(1);
    expect(wrapper.find('section').hasClass('projects')).toBeTruthy();
    expect(wrapper.find(BackToTop).length).toEqual(1);
  });

  it('should render the correct number of ProjectList items', () => {
    const wrapper = mount(<ContentProjects {...props} />);

    expect(wrapper.find('ProjectList li').length).toEqual(18);
  });

  it('should call the prop function scrollTo when clicking the back to top link', () => {
    const wrapper = shallow(<BackToTop {...props} />);
    const link = wrapper.childAt(0);
    link.simulate('click');
    expect(props.scrollTo).toHaveBeenCalled();
  });
});
