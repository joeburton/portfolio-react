import React from 'react';
import { shallow } from 'enzyme';

import ContentIntro from '../src/assets/components/ContentIntro.js';

describe('ContentIntro', () => {
  it("should render a <ContentIntro /> component and it's sub components", () => {
    const wrapper = shallow(<ContentIntro />);

    expect(wrapper.type()).toEqual('section');
    expect(wrapper.hasClass('intro')).toBe(true);
  });
});
