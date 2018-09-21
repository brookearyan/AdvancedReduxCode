import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['comment one', 'comment two']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
})

it('creates one li per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);

})

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('comment one');
  expect(wrapped.render().text()).toContain('comment two');

})
