import React from 'react';
import { shallow } from 'enzyme';

import Content from '../src/assets/components/Content';
import ContentIntro from '../src/assets/components/ContentIntro.js';
import ContentAbout from '../src/assets/components/ContentAbout.js';
import ContentContact from '../src/assets/components/ContentContact.js';
import ContentProjects from '../src/assets/components/ContentProjects.js';

const props = {
  scrollTo: jest.fn()
};

describe('Content', () => {
  it("should render a <Content /> component and it's sub components", () => {
    const wrapper = shallow(<Content {...props} />);

    expect(wrapper.type()).toEqual('section');
    expect(wrapper.hasClass('main')).toBe(true);

    expect(wrapper.find(ContentIntro).length).toEqual(1);
    expect(wrapper.find(ContentAbout).length).toEqual(1);
    expect(wrapper.find(ContentContact).length).toEqual(1);
    expect(wrapper.find(ContentProjects).length).toEqual(1);
  });
});
