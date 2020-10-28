import React from 'react'
import renderer from 'react-test-renderer'
import DateSnippet from './DateSnippet'

test(`renders correctly`, () => {
  const tree = renderer.create(<DateSnippet date="yesterday" />).toJSON()
  expect(tree).toMatchSnapshot()
})